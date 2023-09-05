/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, useRef, useState, createContext } from 'react'
import config from '../api/config.json'

import { getGrantedPermission, permissions2Scopes } from './AuthPermissions'

const AuthContext = createContext(null)
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    console.log("Render AuthProvider")
    // should be an object or string indicating the user-granted scopes
    const [permissions, setPermissions] = useState('')

    const authorizator = useRef(null)

    let initToken = null // Saved (localStorage) Token
    if (permissions == "") {
        const token = localStorage.getItem("token")
        if (token) {
            initToken = JSON.parse(token)
            console.log("Parsed", initToken)
            if ("access_token" in initToken) { // TODO: And timestamp check
                const grantedPermissions = getGrantedPermission(initToken)
                console.log("Granted Permissions", grantedPermissions)
                setPermissions(grantedPermissions)
            }
        }
    }

    const handleTokenResponse = (wouldSaveToken = false, customCallback = null) => {
        return async (res) => {
            console.log("Receive Token", res)
            if (res.error !== undefined)
                throw (res)
            const grantedPermissions = getGrantedPermission(res)
            console.log("Granted Permissions", grantedPermissions)
            setPermissions(grantedPermissions)
            if (wouldSaveToken && grantedPermissions !== "") {
                localStorage.setItem("token", JSON.stringify(res))
            }
            if (customCallback)
                customCallback(grantedPermissions, res)
        }
    }
    // const handleTokenResponse = (res) => {
    //     const grantedPermissions = getGrantedPermission(res)
    //     console.log("Granted", grantedPermissions)
    //     setPermissions(grantedPermissions)
    //     return grantedPermissions
    //     // Require all scopes must be granted by user
    //     // if (google.accounts.oauth2.hasGrantedAllScopes(res, ...config.Scopes)) {
    //     //     setPermissions(true)
    //     // }
    // }

    const handleRevoke = () => {
        console.log("Revoke Token")
        localStorage.removeItem("token")
        setPermissions('')
    }

    const handleGapiLoad = () => {
        console.log("GAPI Loaded")
        window.gapi.client.setToken(initToken)
    }



    if (authorizator.current === null) {
        authorizator.current = initialize(handleGapiLoad, handleTokenResponse, handleRevoke)
        // console.log("Ref", authorizator)
    }
    return (
        <AuthContext.Provider value={{ isSignedIn: permissions !== "", permissions, authorizator: authorizator.current }}>
            {children}
        </AuthContext.Provider>
    )
}

// Documentation: https://developers.google.com/identity/oauth2/web/guides/use-token-model
/**
 * Initialize the application (TokenClient + GAPI). This should be call once per session.
 * Return: An object for Trigger Authorization functionality (request token, incremental authorization, revoke token)
 */
function initialize(gapiLoadCallback, receiveTokenCallback, revokeCallback) {
    // ============= Initialize Token Client for Google Identity Services ============= 
    const client = window.google.accounts.oauth2.initTokenClient({
        client_id: config.ClientId,
        scope: config.Scopes.join(" "),
        callback: "", // Define later, with custom callback
    })
    // ============= Initialize GAPI Client ============= 
    /**
     * Callback after the API client is loaded. 
     * Loads the discovery doc to initialize the API.
     */
    async function initializeGapiClient() {
        await window.gapi.client.init({
            apiKey: config.APIKey,
            discoveryDocs: [config.DiscoveryDoc],
        });
        if (gapiLoadCallback)
            gapiLoadCallback()
        // console.log(window.gapi.client, window.gapi.client.getToken())
    }
    window.gapi.load('client', initializeGapiClient)

    // ============= Return authorizator Object to perform request Access Token, Incremental Scopes Token, Revoke ============= 
    return {
        // Trigger Consent Screen for user to Sign in + Authorization
        // wouldSaveToken = true means save Received Token to localStorage (Remember Me)
        // callback: Custom callback for receive token event. This callback accepts 2 arguments: `permissions` (granted permission) and `token` (raw token response)
        init: (wouldSaveToken = false, callback = null) => {
            client.callback = receiveTokenCallback(wouldSaveToken, callback)
            client.requestAccessToken()
        },

        // Trigger Consent Screen for user to Choose Account + Incremental Authorization (grant the app more permissions)
        // scope: Gmail API Scopes need to be granted.
        // callback: Custom callback for receive token event. This callback accepts 2 arguments: `permissions` (granted permission) and `token` (raw token response)
        incremental: (permissions, callback = null) => {
            if (permissions) {
                client.callback = receiveTokenCallback(localStorage.getItem("token") != null, callback)
                console.log("Incremental with scope", permissions)
                client.requestAccessToken({ scope: permissions2Scopes(permissions) })
            }
        },

        // Revoke received Token (Sign out)
        revoke: () => {
            const token = window.gapi.client.getToken()
            if (token !== null) {
                window.google.accounts.oauth2.revoke(token.access_token)
                window.gapi.client.setToken('')
                revokeCallback()
            }
        },
    }
}

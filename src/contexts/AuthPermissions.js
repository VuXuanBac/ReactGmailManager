export const permissions2Scopes = (permissions) => {
    const _map = {
        "h": "https://www.googleapis.com/auth/gmail.metadata", // Metadata: READ labels, history records, message headers
        "hr": "https://www.googleapis.com/auth/gmail.readonly", // Readonly: READ all resources (message body + attachments) and their metadata
        "w": "https://www.googleapis.com/auth/gmail.compose", // Compose: READ/WRITE drafts + Send messages/drafts
        "hrw": "https://www.googleapis.com/auth/gmail.modify",  // Modify: READ/WRITE all resources, not DELETE immediate permanently (messages, threads)
        "hrw*": "https://mail.google.com/", // All: Not restrict
    }
    if (permissions in _map) return _map[permissions]
    throw Error("Invalid Permissions")
}

// export function getGrantedScopes(...scopes) {
//     if (scopes.indexOf("https://mail.google.com/") > -1)
//         return 'hrw*'
//     if (scopes.indexOf("https://www.googleapis.com/auth/gmail.modify") > -1)
//         return 'hrw'
//     let granted = ''
//     if (scopes.indexOf("https://www.googleapis.com/auth/gmail.compose") > -1)
//         granted += 'w'
//     if (scopes.indexOf("https://www.googleapis.com/auth/gmail.metadata") > -1)
//         granted += 'h'
//     if (scopes.indexOf("https://www.googleapis.com/auth/gmail.readonly") > -1)
//         granted += 'hr'
//     return granted
// }

export function getGrantedPermission(tokenResponse) {
    const isInclude = (...scopes) => window.google.accounts.oauth2.hasGrantedAllScopes(tokenResponse, ...scopes);
    if (isInclude("https://mail.google.com/"))
        return 'hrw*'
    if (isInclude("https://www.googleapis.com/auth/gmail.modify"))
        return 'hrw'

    let granted = ''
    if (isInclude("https://www.googleapis.com/auth/gmail.compose"))
        granted += 'w'
    if (isInclude("https://www.googleapis.com/auth/gmail.metadata"))
        granted += 'h'
    if (isInclude("https://www.googleapis.com/auth/gmail.readonly"))
        granted += 'hr'
    return granted
}
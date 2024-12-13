module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "my-secret-key",
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    }
};

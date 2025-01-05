export default class AuthStore {
    STORAGE_KEY = 'accessToken';
    EXPIRES_AT = 'expires_at';
    PROFILE = 'athletikProfile';
    TOKEN_FLAG = 'tokenFlag';
    clearAuth(){
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.EXPIRES_AT);
        localStorage.removeItem(this.PROFILE);
    }
    getExpiresAt(){
        let expiresAt = window.localStorage.getItem(this.EXPIRES_AT),
            result = expiresAt ? +expiresAt : 0;
        return result;
    }
    getProfile(){
        const profileStr = localStorage.getItem(this.PROFILE),
            profile = profileStr ? JSON.parse(profileStr) : null;
        return profile;
    }
    getToken() {
        const flag = window.localStorage.getItem(this.STORAGE_KEY);
        if(flag){
            window.localStorage.setItem(this.TOKEN_FLAG, false);
            return window.localStorage.getItem(this.STORAGE_KEY);
        }
    }
    setAuth(accessToken, expiresAt) {
        window.localStorage.setItem(this.STORAGE_KEY, accessToken);
        window.localStorage.setItem(this.EXPIRES_AT, expiresAt);
    }
    setProfile(profile) {
        const profileStr = JSON.stringify(profile);
        localStorage.setItem(this.PROFILE, profileStr);
    }
}
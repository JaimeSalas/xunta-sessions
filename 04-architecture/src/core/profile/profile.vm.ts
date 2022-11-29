export interface UserProfile {
    userName: string;
}

export const createDefaultUserName = (): UserProfile => ({
    userName: ''
});
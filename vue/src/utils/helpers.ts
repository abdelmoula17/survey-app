export function saveSessionToken(token: string): void {
    sessionStorage.setItem("TOKEN", token);
}

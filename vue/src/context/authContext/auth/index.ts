import axios from "axios";
const authProvider = {
    isAuthentificated: false,
    signIn(callback: VoidFunction) {
        this.isAuthentificated = true;
        callback();
    },
    signOut(callback: VoidFunction) {
        this.isAuthentificated = false;
        callback();
    },
    async signUp(newUser: any): Promise<any> {
        return await axios.post("http://localhost:8000/api/register", newUser);
    },
};
export { authProvider };

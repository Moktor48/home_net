export default function AdminEntry() {
    return(
        <div>
            <form>
                <label htmlFor="nameEnterAdmin">User Name</label>
                <input type="text" id="nameEnterAdmin" name="nameEnterAdmin"></input>
                <label htmlFor="changePass">Change Password</label>
                <input type="text" id="changePass" name="changePass"></input>
                <label htmlFor="setAdmin">Set as Admin</label>
                <input type="checkbox" id="setAdmin" name="setAdmin"></input>
            </form>
        </div>
    )
}
export default function TaskEntry() {
    return(
        <div>
            <form>
                <label htmlFor="nameEnter">User Name</label>
                <input type="text" id="nameEnter" name="nameEnter"></input>
                <label htmlFor="taskEnter">Task</label>
                <input type="text" id="taskEnter" name="taskEnter"></input>
                <label htmlFor="dateEnter">Due Date</label>
                <input type="date" id="dateEnter" name="dateEnter"></input>
            </form>
        </div>
    )
}
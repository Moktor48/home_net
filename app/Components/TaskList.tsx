export default function TaskList() {
    return(
        <div>
            <h1>Date: Xxx Sep 32, 2041</h1>
            <table>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User's Name</td>
                        <td>Task Description</td>
                        <td>Date of dueness</td>
                        <td><input type="checkbox" id="checkComplete" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
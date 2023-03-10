function Table({ props }) {
    return (
        <table border='10'>
            <thead>
                <tr>
                    <td>FirstName</td>
                    <td>Lastname</td>
                    <td>Age</td>
                    <td>Height</td>
                </tr>
            </thead>
            <tbody>
                {props.map((user) => {
                    return (
                        <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.age}</td>
                            <td>{user.height}</td>
                        </tr>
                    );
                }
                )}

            </tbody>
        </table>
    )
}

export default Table
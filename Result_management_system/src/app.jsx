function Result() {
    let marks = 72;
    return (
        <div>
            <h1>Result Management System</h1>
            <p>Student Name: Prashanth</p>
            <p>Marks: {marks}</p>
            {marks < 35 ? (
                <h2>Result: Fail</h2>
            ) : (
                <h2>Result: Pass</h2>
            )}
        </div>
    );
}
export default Result;

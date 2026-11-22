export function Display({cvObj}){
    return(
        <section>
            <h2>General Information</h2>
            <p>Name: </p>
            <p>{cvObj.Name}</p>
            <p>Email: </p>
            <p>{cvObj.Email}</p>
            <p>Phone: </p>
            <p>{cvObj.Phone}</p>
            <h2>Educational Information</h2>
            <p>School Name: </p>
            <p>{cvObj['School Name']}</p>
            <p>School start date: </p>
            <p>{cvObj['School start date']}</p>
            <p>School end date: </p>
            <p>{cvObj['School end date']}</p>
            <h2>Work Experience</h2>
            <p>Company Name: </p>
            <p>{cvObj['Company Name']}</p>
            <p>Position Title: </p>
            <p>{cvObj['Position Title']}</p>
            <p>Main responsibilities: </p>
            <p>{cvObj['Company Responsibility']}</p>
            <p>Joined on: </p>
            <p>{cvObj['Company joining date']}</p>
            <p>Worked till: </p>
            <p>{cvObj['Company exit date']}</p>
        </section>
    )
}
const tabContainer = document.getElementById('tab-container');
const buttonContainer = document.getElementById('button-container');
const contentContainer = document.getElementById('content-container');
const tableContainer = document.getElementById('data-table');


const sportsData = {
    "sports": [
        {
            "tabName": "Football",
            "content": [
                {
                    "name": "Players",
                    "details": [
                        { "name": "Lionel Messi", "position": "Forward", "number": 10 },
                        { "name": "Cristiano Ronaldo", "position": "Forward", "number": 7 }
                    ]
                },
                {
                    "name": "Matches",
                    "details": [
                        { "opponent": "Team A", "date": "2024-10-15", "score": "3-1" },
                        { "opponent": "Team B", "date": "2024-10-22", "score": "2-2" }
                    ]
                }
            ]
        },
        {
            "tabName": "Basketball",
            "content": [
                {
                    "name": "Players",
                    "details": [
                        { "name": "LeBron James", "position": "Forward", "number": 23 },
                        { "name": "Stephen Curry", "position": "Guard", "number": 30 }
                    ]
                },
                {
                    "name": "Matches",
                    "details": [
                        { "opponent": "Team X", "date": "2024-10-20", "score": "102-98" },
                        { "opponent": "Team Y", "date": "2024-10-27", "score": "95-101" }
                    ]
                }
            ]
        },
        {
            "tabName": "Tennis",
            "content": [
                {
                    "name": "Players",
                    "details": [
                        { "name": "Novak Djokovic", "ranking": 1 },
                        { "name": "Rafael Nadal", "ranking": 3 }
                    ]
                },
                {
                    "name": "Matches",
                    "details": [
                        { "opponent": "Player A", "date": "2024-10-18", "result": "Won" },
                        { "opponent": "Player B", "date": "2024-10-25", "result": "Lost" }
                    ]
                }
            ]
        },
        {
            "tabName": "Cricket",
            "content": [
                {
                    "name": "Players",
                    "details": [
                        { "name": "Virat Kohli", "role": "Batsman", "runs": 11000 },
                        { "name": "Jasprit Bumrah", "role": "Bowler", "wickets": 200 }
                    ]
                },
                {
                    "name": "Matches",
                    "details": [
                        { "opponent": "Team C", "date": "2024-10-14", "result": "Won" },
                        { "opponent": "Team D", "date": "2024-10-21", "result": "Lost" }
                    ]
                }
            ]
        },
        {
            "tabName": "Baseball",
            "content": [
                {
                    "name": "Players",
                    "details": [
                        { "name": "Mike Trout", "position": "Center Fielder", "number": 27 },
                        { "name": "Clayton Kershaw", "position": "Pitcher", "number": 22 }
                    ]
                },
                {
                    "name": "Matches",
                    "details": [
                        { "opponent": "Team E", "date": "2024-10-16", "score": "5-3" },
                        { "opponent": "Team F", "date": "2024-10-23", "score": "7-4" }
                    ]
                }
            ]
        }
    ]
};

const activeTab = 0;

sportsData.sports.forEach((sport, idx) => {
    const tab = document.createElement('button')
    tab.textContent = sport.tabName;
    tab.classList.add('tabs')
    tabContainer.appendChild(tab);

    if (idx == activeTab) {
        tab.classList.add('active');
        tabChange(sport)
    }

    tab.addEventListener('click', () => {
        contentContainer.innerHTML ="";
        const allTabs = document.querySelectorAll('.tabs')
        allTabs.forEach((t) => {
            t.classList.remove('active')
        })
        tab.classList.add('active');
        tabChange(sport)
    })

});

function tabChange(sport) {
    buttonContainer.innerHTML = "";
    sport.content.forEach((data) => {
        const btn = document.createElement('button')
        btn.textContent = data.name;
        btn.classList.add('btns');
        buttonContainer.appendChild(btn);
        btn.addEventListener('click', () => {
            const allBtns = document.querySelectorAll('.btns')
            allBtns.forEach((t) => {
                t.classList.remove('active')
            })
            btn.classList.add('active');
            getData(data.details)
        })
    })
}

function getData(details) {

  // this approach single table at a time  
        contentContainer.innerHTML =
        `<table>
            <thead>
                <tr>
                    ${Object.keys(details[0]).map(h =>
                        `<th>${h}</th>`
                    ).join('')}
                </tr>    
            </thead>
            <tbody>   
                ${details.map(detail =>
                    `<tr>
                        ${Object.values(detail).map(d =>
                          `<td>${d}</td>`
                        ).join('')}
                    </tr>`
                ).join('')}    
            </tbody>
        </table>`    
}
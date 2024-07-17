let month = document.getElementById('month');
        let year = document.getElementById('year');
        let day = document.getElementById('day');

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let newYear = new Date();
        let newMonth = new Date();
        let newDay = new Date();

        year.innerText = newYear.getFullYear();
        month.innerText = months[newMonth.getMonth()];
        day.innerText = newDay.getDate();
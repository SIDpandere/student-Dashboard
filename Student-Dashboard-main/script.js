function viewStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = ''; // Clear previous data

    const students = ["John Doe", "Jane Smith", "Emily Jones"];
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentList.appendChild(li);
    });
}

function viewTeachers() {
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = ''; // Clear previous data

    const teachers = ["Mr. Anderson", "Ms. Johnson", "Mrs. Williams"];
    teachers.forEach(teacher => {
        const li = document.createElement('li');
        li.textContent = teacher;
        teacherList.appendChild(li);
    });
}

function viewAttendance() {
    const attendanceList = document.getElementById('attendanceList');
    attendanceList.innerHTML = ''; // Clear previous data

    const attendance = ["John Doe: 85%", "Jane Smith: 90%", "Emily Jones: 75%"];
    attendance.forEach(record => {
        const li = document.createElement('li');
        li.textContent = record;
        attendanceList.appendChild(li);
    });
}

function viewIndividualAttendance() {
    const studentId = document.getElementById('studentAttendanceId').value;
    const individualAttendanceList = document.getElementById('individualAttendanceList');
    individualAttendanceList.innerHTML = ''; // Clear previous data

    const individualAttendance = {
        "1001": "85%",
        "1002": "90%",
        "1003": "75%"
    };

    const attendance = individualAttendance[studentId] || "No record found";
    const li = document.createElement('li');
    li.textContent = `Student ID: ${studentId}, Attendance: ${attendance}`;
    individualAttendanceList.appendChild(li);
}

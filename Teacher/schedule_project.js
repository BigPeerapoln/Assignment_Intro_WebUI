const examData = [{
    project_th: "ระบบวิเคราะห์ข้อมูลการขายสำหรับธุรกิจ SME",
    project_en: "Sales Data Analytics System for SMEs",
    date: "2025-09-01", // Week 1
    time: "10:00 - 11:00 น.",
    location: "อาคาร 10 ห้อง 10-302",
    students: [{
        name: "นายศตวรรษ บัวผัน",
        id: "6806022510001"
    }],
    committee: [{
        name: "ผศ.นพดล บูรณ์กุศล",
        role: "กรรมการ"
    }, {
        name: "รศ.ดร.อนิราช มิ่งขวัญ",
        role: "ประธาน"
    }, {
        name: "อ.นิรันดร์ ใจเย็น",
        role: "กรรมการ"
    }, {
        name: "อ.สุดา รักษ์ดี",
        role: "กรรมการ"
    }],
    status: "pending"
}, {
    project_th: "แอปพลิเคชันแนะนำร้านอาหารโดยใช้ AI",
    project_en: "AI-Powered Restaurant Recommendation Application",
    date: "2025-09-08", // Week 2
    time: "11:00 - 12:00 น.",
    location: "อาคาร 12 ห้อง 12-205",
    students: [{
        name: "นางสาวกนกวรรณ ศรีประไชย",
        id: "6806022510041"
    }],
    committee: [{
        name: "อ.ดร.กาญจน ณ ศรีธะ",
        role: "กรรมการ"
    }, {
        name: "ผศ.ดร.บีสุดา ดาวเรือง",
        role: "ประธาน"
    }, {
        name: "ผศ.ดร.ขนิษฐา นามี",
        role: "กรรมการ"
    }, {
        name: "ผศ.นิมิต ศรีคำทา",
        role: "กรรมการ"
    }],
    status: "approved"
}, {
    project_th: "ระบบบริหารจัดการการเกษตรอัจฉริยะ",
    project_en: "Smart Agriculture Management System",
    date: "2025-09-15", // Week 3
    time: "13:00 - 14:00 น.",
    location: "อาคาร 10 ห้อง 10-401",
    students: [{
        name: "นายนันทวัฒน์ นันทวิสาร",
        id: "6806022510050"
    }],
    committee: [{
        name: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        role: "ประธาน"
    }, {
        name: "ผศ.ดร.นิติการ นาคเจือทอง",
        role: "กรรมการ"
    }, {
        name: "รศ.ดร.อนิราช มิ่งขวัญ",
        role: "กรรมการ"
    }, {
        name: "อ.นิรันดร์ ใจเย็น",
        role: "กรรมการ"
    }],
    status: "pending"
}, {
    project_th: "แพลตฟอร์มจัดการตารางเรียนอัตโนมัติ",
    project_en: "Automated Class Scheduling Platform",
    date: "2025-09-22", // Week 4
    time: "09:00 - 10:00 น.",
    location: "ห้องประชุม 1",
    students: [{
        name: "นายลัทธพล ศิริหล้า",
        id: "6806022510289"
    }],
    committee: [{
        name: "ผศ.ดร.บีสุดา ดาวเรือง",
        role: "ประธาน"
    }, {
        name: "ผศ.นพดล บูรณ์กุศล",
        role: "กรรมการ"
    }, {
        name: "อ.สุดา รักษ์ดี",
        role: "กรรมการ"
    }, {
        name: "ผศ.นิมิต ศรีคำทา",
        role: "กรรมการ"
    }],
    status: "approved"
}, {
    project_th: "ระบบติดตามสุขภาพผู้สูงอายุ",
    project_en: "Elderly Health Monitoring System",
    date: "2025-09-29", // Week 5 (จะถูกซ่อนจากฟิลเตอร์)
    time: "14:00 - 15:00 น.",
    location: "อาคาร 15 ห้อง 15-101",
    students: [{
        name: "นายก้องกาย วงษ์มอญ",
        id: "6806022510319"
    }],
    committee: [{
        name: "ผศ.ดร.นิติการ นาคเจือทอง",
        role: "กรรมการ"
    }, {
        name: "ผศ.ดร.สุพาภรณ์ ซิ้มเจริญ",
        role: "ประธาน"
    }, {
        name: "อ.นิรันดร์ ใจเย็น",
        role: "กรรมการ"
    }, {
        name: "ผศ.ดร.ขนิษฐา นามี",
        role: "กรรมการ"
    }],
    status: "pending"
}];

const pendingExamData = examData.filter(exam => exam.status === 'pending');
const approvedExamData = examData.filter(exam => exam.status === 'approved');

// ฟังก์ชันสำหรับจัดเรียงคณะกรรมการ (ประธานขึ้นก่อน)
const sortCommittee = (committee) => {
    return [...committee].sort((a, b) => {
        if (a.role === "ประธาน") return -1;
        if (b.role === "ประธาน") return 1;
        return 0;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Define all elements once
    const elements = {
        pending: {
            body: document.getElementById('exam-table-body-pending'),
            count: document.getElementById('exam-count-pending'),
            date: document.getElementById('current-date-pending'),
            weekFilter: document.getElementById('week-filter-pending'),
            dateFilter: document.getElementById('date-filter-pending'),
            section: document.getElementById('pendingTableSection'),
            tab: document.getElementById('pendingTab')
        },
        approved: {
            body: document.getElementById('exam-table-body-approved'),
            count: document.getElementById('exam-count-approved'),
            date: document.getElementById('current-date-approved'),
            weekFilter: document.getElementById('week-filter-approved'),
            dateFilter: document.getElementById('date-filter-approved'),
            section: document.getElementById('approvedTableSection'),
            tab: document.getElementById('approvedTab')
        }
    };

    const modal = document.getElementById('examModal');

    // กำหนดวันที่เริ่มต้นภาคเรียน (เพื่อให้คำนวณสัปดาห์ได้ถูกต้อง)
    const startOfSemester = new Date('2025-09-01');

    // --- Utility Functions ---
    const formatDate = (dateString) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('th-TH', options);
    };

    const getAcademicWeekNumber = (date) => {
        const diffTime = Math.abs(date.getTime() - startOfSemester.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.floor(diffDays / 7) + 1;
    };

    const getWeekStartEnd = (week) => {
        const startDate = new Date(startOfSemester);
        startDate.setDate(startOfSemester.getDate() + (week - 1) * 7);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);
        return {
            startDate,
            endDate
        };
    };

    const renderSummaryCards = (examCountId, currentDateId, filteredExams) => {
        document.getElementById(examCountId).textContent = filteredExams.length;
        document.getElementById(currentDateId).textContent = formatDate(new Date().toISOString().split('T')[0]);
    };

    const renderTable = (data, tabType) => {
        const selectedWeek = elements[tabType].weekFilter.value;
        const selectedDate = elements[tabType].dateFilter.value;
        let filteredExams = data;

        if (selectedDate) {
            filteredExams = data.filter(exam => exam.date === selectedDate);
        } else if (selectedWeek) {
            const selectedWeekNumber = parseInt(selectedWeek, 10);
            filteredExams = data.filter(exam => {
                const examDate = new Date(exam.date);
                return getAcademicWeekNumber(examDate) === selectedWeekNumber;
            });
        }

        elements[tabType].body.innerHTML = '';
        if (filteredExams.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="4" class="px-6 py-4 text-center text-gray-500">ไม่มีตารางสอบในช่วงเวลาที่เลือก</td>`;
            elements[tabType].body.appendChild(row);
        } else {
            filteredExams.forEach(exam => {
                const row = document.createElement('tr');
                const examIndex = examData.findIndex(e => e.project_th === exam.project_th);
                row.innerHTML = `
                    <td class="px-6 py-4">${exam.project_th}</td>
                    <td class="px-6 py-4">${formatDate(exam.date)}</td>
                    <td class="px-6 py-4">${exam.time}</td>
                    <td class="px-6 py-4">
                        <a href="#" class="btn-view-details" data-exam-index="${examIndex}">
                            ดูรายละเอียด
                        </a>
                    </td>
                `;
                elements[tabType].body.appendChild(row);
            });
        }
        renderSummaryCards(`exam-count-${tabType}`, `current-date-${tabType}`, filteredExams);
    };

    window.showTable = (tabType) => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active', 'text-blue-700', 'font-bold', 'border-blue-700'));
        document.querySelectorAll('.tab-button').forEach(tab => tab.classList.add('text-gray-500', 'font-medium'));

        // Hide all sections
        document.querySelectorAll('.exam-section').forEach(section => section.classList.add('hidden'));

        // Add active class to clicked tab and show section
        if (tabType === 'pending') {
            elements.pending.tab.classList.remove('text-gray-500', 'font-medium');
            elements.pending.tab.classList.add('active', 'text-blue-700', 'font-bold', 'border-b-2', 'border-blue-700');
            elements.pending.section.classList.remove('hidden');
            renderTable(pendingExamData, 'pending');
        } else if (tabType === 'approved') {
            elements.approved.tab.classList.remove('text-gray-500', 'font-medium');
            elements.approved.tab.classList.add('active', 'text-blue-700', 'font-bold', 'border-b-2', 'border-blue-700');
            elements.approved.section.classList.remove('hidden');
            renderTable(approvedExamData, 'approved');
        }
    };

    // Event Listeners for Filters
    elements.pending.weekFilter.addEventListener('change', () => {
        elements.pending.dateFilter.value = '';
        renderTable(pendingExamData, 'pending');
    });
    elements.pending.dateFilter.addEventListener('change', () => {
        elements.pending.weekFilter.value = '';
        renderTable(pendingExamData, 'pending');
    });
    elements.approved.weekFilter.addEventListener('change', () => {
        elements.approved.dateFilter.value = '';
        renderTable(approvedExamData, 'approved');
    });
    elements.approved.dateFilter.addEventListener('change', () => {
        elements.approved.weekFilter.value = '';
        renderTable(approvedExamData, 'approved');
    });


    // Generate week filter options for only 4 weeks
    const generateWeekOptions = (filterElement) => {
        for (let i = 1; i <= 4; i++) {
            const option = document.createElement('option');
            option.value = i;
            const {
                startDate,
                endDate
            } = getWeekStartEnd(i);
            option.textContent = `สัปดาห์ที่ ${i} (${formatDate(startDate.toISOString().split('T')[0])} - ${formatDate(endDate.toISOString().split('T')[0])})`;
            filterElement.appendChild(option);
        }
    };
    generateWeekOptions(elements.pending.weekFilter);
    generateWeekOptions(elements.approved.weekFilter);


    // Modal functionality
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-view-details');
        if (btn) {
            e.preventDefault();
            const index = btn.dataset.examIndex;
            const exam = examData[index];

            if (!exam) return;

            document.getElementById('exam-project-th').textContent = exam.project_th;
            document.getElementById('exam-project-en').textContent = exam.project_en;
            document.getElementById('exam-date').textContent = formatDate(exam.date);
            document.getElementById('exam-time').textContent = exam.time;
            document.getElementById('exam-location').textContent = exam.location;

            const studentsDiv = document.getElementById('exam-students');
            studentsDiv.innerHTML = '';
            exam.students.forEach(student => {
                const p = document.createElement('p');
                p.innerHTML = `<strong class="text-gray-700">ชื่อ:</strong> ${student.name} (${student.id})`;
                studentsDiv.appendChild(p);
            });

            const committeeDiv = document.getElementById('exam-committee');
            committeeDiv.innerHTML = '';
            // Sort the committee before displaying
            const sortedCommittee = sortCommittee(exam.committee);
            sortedCommittee.forEach(member => {
                const p = document.createElement('p');
                p.innerHTML = `<strong class="text-gray-700">ชื่อ:</strong> ${member.name} (<span class="font-bold text-blue-600">${member.role}</span>)`;
                committeeDiv.appendChild(p);
            });

            modal.style.display = 'flex';
        }
    });

    window.closeModal = () => {
        modal.style.display = 'none';
    };
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Initial render
    showTable('pending');
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the sidebar and the open/close buttons
    const sidebar = document.getElementById('sidebar');
    const sidebarOpenBtn = document.getElementById('sidebar-open-btn'); // Add a button to open the sidebar
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.remove('-left-full'); // Or whichever class you use to hide it
        sidebar.classList.add('left-0');
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('left-0');
        sidebar.classList.add('-left-full'); // Or whichever class you use to hide it
    }

    // Add a click event to the close button
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
    
    // Add a click event to an open button (you'll need to add this to your HTML)
    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', openSidebar);
    }

    // แก้ไข: ปรับโค้ดการปิด sidebar เมื่อคลิกนอกพื้นที่
    // เพิ่มเงื่อนไขว่าโค้ดนี้จะทำงานเฉพาะบนหน้าจอขนาดเล็กกว่า 1024px เท่านั้น
    window.addEventListener('click', function(event) {
        if (window.innerWidth < 1024) { // ตรวจสอบขนาดหน้าจอ
            if (!sidebar.contains(event.target) && !event.target.closest('#sidebar-open-btn')) {
                closeSidebar();
            }
        }
    });

    // Add responsive behavior based on screen size
    function handleResize() {
        if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
            sidebar.classList.remove('fixed', '-left-full');
            sidebar.classList.add('relative', 'left-0');
        } else {
            sidebar.classList.remove('relative', 'left-0');
            sidebar.classList.add('fixed', '-left-full');
        }
    }

    // Run on page load and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);
});
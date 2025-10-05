const weeklyData = [
    { week: 'สัปดาห์ที่ 1', value: 10, status: 'อาจารย์ตรวจสอบเสร็จสิ้น', detail: 'รวบรวมข้อมูลและออกแบบฐานข้อมูลเบื้องต้น', link: 'https://github.com/project-repo', newProgress: 20, newProgressDate: '27 สิงหาคม 2568', advisorComment: 'งานสัปดาห์แรกทำได้ดีมากครับ มีความชัดเจนในส่วนของฐานข้อมูลและขอบเขตของโปรเจกต์', subjectComment: 'เน้นการเขียนเอกสารสรุปให้กระชับมากขึ้นในสัปดาห์หน้า', date: '23 สิงหาคม 2568' },
    { week: 'สัปดาห์ที่ 2', value: 20, status: 'อาจารย์ตรวจสอบเสร็จสิ้น', detail: 'พัฒนาส่วนหน้าของเว็บไซต์ และเชื่อมต่อ API เบื้องต้น', link: 'https://github.com/project-repo', newProgress: 30, newProgressDate: '3 กันยายน 2568', advisorComment: 'เห็นความตั้งใจในการทำงานดีครับ ส่วนของโค้ดสะอาด แต่ควรจัดระเบียบโครงสร้างโฟลเดอร์ให้เป็นระเบียบมากขึ้น', subjectComment: 'การเขียนโค้ดดีมากครับ แต่ควรมี unit test ประกอบด้วย', date: '30 สิงหาคม 2568' },
    { week: 'สัปดาห์ที่ 3', value: 30, status: 'อาจารย์ตรวจสอบเสร็จสิ้น', detail: 'ดำเนินการเขียนโค้ดสำหรับระบบแนะนำที่พักเบื้องต้น', link: 'https://github.com/project-repo', newProgress: 40, newProgressDate: '10 กันยายน 2568', advisorComment: 'งานสัปดาห์นี้ทำได้ดีมากครับ ครอบคลุมตามที่วางแผนไว้ ขอให้เพิ่มรายละเอียดการทดสอบในสัปดาห์ต่อไปด้วย', subjectComment: 'ผลลัพธ์ที่ได้น่าพอใจครับ แนะนำให้เริ่มคิดถึงการทำ usability testing', date: '6 กันยายน 2568' },
    { week: 'สัปดาห์ที่ 4', value: 40, status: 'รออาจารย์ตรวจสอบ', detail: 'อัปเดตระบบฐานข้อมูลและออกแบบส่วนหน้า (UI) ของหน้าหลัก', link: 'https://drive.google.com/link-to-doc', newProgress: null, newProgressDate: null, advisorComment: null, subjectComment: null, date: '13 กันยายน 2568' }
];

// Function to show the progress details modal
function showProgressDetailsModal(data) {
    const modal = document.getElementById('progressDetailsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalStatus = document.getElementById('modalStatus');
    const modalDetail = document.getElementById('modalDetail');
    const modalLink = document.getElementById('modalLink');
    const progressSection = document.getElementById('progressSection');
    const modalAdvisorComment = document.getElementById('modalAdvisorComment');
    const modalSubjectComment = document.getElementById('modalSubjectComment');
    const oldProgressBar = document.getElementById('oldProgressBar');
    const oldProgressText = document.getElementById('oldProgressText');
    const newProgressBar = document.getElementById('newProgressBar');
    const newProgressText = document.getElementById('newProgressText');
    const oldProgressDateEl = document.getElementById('oldProgressDate');
    const newProgressDateEl = document.getElementById('newProgressDate');
    const currentProgressEl = document.getElementById('currentProgress');

    modalTitle.textContent = `รายละเอียดความคืบหน้า${data.week}`;
    modalStatus.textContent = data.status;
    modalDetail.textContent = data.detail;
    modalLink.href = data.link;

    if (data.status.includes('เสร็จสิ้น')) {
        modalStatus.classList.remove('text-red-500');
        modalStatus.classList.add('text-green-500');
        progressSection.classList.remove('hidden');

        // แสดงความคิดเห็นของอาจารย์ที่ปรึกษา
        modalAdvisorComment.textContent = data.advisorComment || 'ไม่มีความคิดเห็น';

        // แสดงความคิดเห็นของอาจารย์ประจำรายวิชา
        modalSubjectComment.textContent = data.subjectComment || 'ไม่มีความคิดเห็น';

        oldProgressBar.style.width = data.value + '%';
        oldProgressText.textContent = data.value + '%';
        oldProgressDateEl.textContent = data.date;

        newProgressBar.style.width = data.newProgress + '%';
        newProgressText.textContent = data.newProgress + '%';
        newProgressDateEl.textContent = data.newProgressDate;

        currentProgressEl.textContent = `${data.newProgress}%`;

    } else {
        modalStatus.classList.remove('text-green-500');
        modalStatus.classList.add('text-red-500');
        progressSection.classList.add('hidden');
    }

    modal.style.display = 'flex';
}

// Function to close any modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('progressDetailsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const ctx = document.getElementById('weeklyProgressChart').getContext('2d');
const labels = weeklyData.map(d => d.week);
const values = weeklyData.map(d => d.value);

const progressChart = new Chart(ctx, {
    type: 'line', // เปลี่ยนเป็น 'line' chart
    data: {
        labels: labels,
        datasets: [{
            label: 'ความคืบหน้า (%)',
            data: values,
            borderColor: '#3b82f6', // สีเส้น
            backgroundColor: 'rgba(59, 130, 246, 0.2)', // สีพื้นหลังใต้เส้น
            pointBackgroundColor: '#1d4ed8', // สีจุด
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#1d4ed8',
            tension: 0.4, // ทำให้เส้นโค้งมน
            fill: true, // เติมสีใต้เส้น
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return ` ความคืบหน้า: ${context.parsed.y}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#374151', font: { size: 12 } }
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { callback: v => v + '%', color: '#374151' },
                grid: { color: 'rgba(0,0,0,0.06)' }
            }
        },
        animation: {
            duration: 800,
            easing: 'easeOutQuart'
        },
        onClick: (e, elements) => {
            if (elements.length > 0) {
                const clickedIndex = elements[0].index;
                const data = weeklyData[clickedIndex];
                showProgressDetailsModal(data);
            }
        }
    }
});

// Update progress bar
const latestData = weeklyData[weeklyData.length - 1];
const latestProgress = latestData.value;
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

progressBar.style.width = `${latestProgress}%`;
progressText.textContent = `${latestProgress}%`;

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function submitProgress() {
    alert("บันทึกความคืบหน้าเรียบร้อยแล้ว!");
    closeModal('progressModal');
}

document.getElementById('weekFilter').addEventListener('change', function () {
    const selectedWeek = this.value;
    const cards = document.querySelectorAll('#progressCards .progress-card');

    cards.forEach(card => {
        const cardWeek = card.getAttribute('data-week');
        if (selectedWeek === 'all') {
            card.style.display = 'flex';
        } else if (selectedWeek === cardWeek) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
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
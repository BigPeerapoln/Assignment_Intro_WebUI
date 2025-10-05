const projects = {
    project1: {
        projectName: 'ระบบบริหารจัดการหอพักนักศึกษา',
        projectType: 'โครงงานพิเศษ',
        students: [
            { name: 'นายพลากร แพทย์นุเคราะห์' },
            { name: 'นายวุฒิพงษ์ วังรัตน์' }
        ],
        academic: {
            major: 'IT',
            grade: 'ปริญญาตรีชั้นปีที่ 4'
        }
    },
    project2: {
        projectName: 'แพลตฟอร์มการจัดการเรียนรู้',
        projectType: 'โครงงานสหกิจ',
        students: [
            { name: 'นายกิตติทัษน์ พุ่มเจริญ' }
        ],
        academic: {
            major: 'ITI',
            grade: 'ปริญญาตรีชั้นปีที่ 3'
        }
    }
};

function showApprovedTable() {
    window.location.href = "Check_week_teacher_subject.html";
}
function showAlertWithCard(projectId) {
    const project = projects[projectId];
    if (!project) {
        alert('ไม่พบข้อมูลโครงงาน');
        return;
    }

    const modal = document.getElementById('detailsModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
                <div>
                    <h4 class="text-lg font-bold text-blue-800 mb-1">ข้อมูลโครงงาน</h4>
                    <p class="text-gray-700"><strong class="font-semibold">ชื่อโครงงาน:</strong> ${project.projectName}</p>
                    <p class="text-gray-700"><strong class="font-semibold">ประเภทโครงงาน:</strong> ${project.projectType}</p>
                </div>
                <div>
                    <h4 class="text-lg font-bold text-blue-800 mb-1">ข้อมูลนักศึกษา</h4>
                    <p class="text-gray-700"><strong class="font-semibold">จำนวน:</strong> ${project.students.length} คน</p>
                    ${project.students.map((student, index) => `<p class="text-gray-700"><strong class="font-semibold">นักเรียนคนที่ ${index + 1}:</strong> ${student.name}</p>`).join('')}
                </div>
                <div>
                    <h4 class="text-lg font-bold text-blue-800 mb-1">ข้อมูลการศึกษา</h4>
                    <p class="text-gray-700"><strong class="font-semibold">สาขา:</strong> ${project.academic.major}</p>
                    <p class="text-gray-700"><strong class="font-semibold">ระดับชั้น:</strong> ${project.academic.grade}</p>
                </div>
            `;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const detailsModal = document.getElementById('detailsModal');
    const alertModal = document.getElementById('alertModal');
    if (event.target == detailsModal) {
        detailsModal.style.display = 'none';
    }
    if (event.target == alertModal) {
        closeAlert();
    }
}

function showPendingTable() {
    document.getElementById('pendingProjects').classList.remove('hidden');
    document.getElementById('approvedProjects').classList.add('hidden');
    document.getElementById('pendingTab').classList.add('active', 'border-blue-700', 'font-bold', 'text-blue-700');
    document.getElementById('approvedTab').classList.remove('active', 'border-blue-700', 'font-bold', 'text-blue-700');
    document.getElementById('approvedTab').classList.add('text-gray-500', 'font-medium');
}

function showApprovedTable() {
    document.getElementById('pendingProjects').classList.add('hidden');
    document.getElementById('approvedProjects').classList.remove('hidden');
    document.getElementById('approvedTab').classList.add('active', 'border-blue-700', 'font-bold', 'text-blue-700');
    document.getElementById('pendingTab').classList.remove('active', 'border-blue-700', 'font-bold', 'text-blue-700');
    document.getElementById('pendingTab').classList.add('text-gray-500', 'font-medium');
}

// ฟังก์ชันใหม่สำหรับจัดการการอนุมัติ
function approveStudent() {
    const alertModal = document.getElementById('alertModal');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const successIcon = document.getElementById('successIcon');
    const errorIcon = document.getElementById('errorIcon');

    // ซ่อน modal รายละเอียดเดิมก่อน
    closeModal();

    // แสดงไอคอนและข้อความสำหรับสถานะอนุมัติ
    successIcon.classList.remove('hidden');
    errorIcon.classList.add('hidden');
    alertTitle.textContent = 'อนุมัติสำเร็จ';
    alertMessage.textContent = 'นักศึกษาได้รับการอนุมัติให้เข้าสู่ระบบเพื่อเสนอหัวข้อโครงงาน ได้สำเร็จแล้ว';

    // แสดง modal แจ้งเตือน
    alertModal.classList.remove('hidden');
    alertModal.classList.add('flex');
}

function closeAlert() {
    const alertModal = document.getElementById('alertModal');
    alertModal.classList.add('hidden');
    alertModal.classList.remove('flex');
}
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
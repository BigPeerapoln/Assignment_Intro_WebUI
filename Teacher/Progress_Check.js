const projectData = [{
    project_id: "PJ001",
    project_th: "ระบบวิเคราะห์ข้อมูลการขายสำหรับธุรกิจ SME",
    student_name: "นายศตวรรษ บัวผัน",
    advisor_name: "ผศ.นพดล บูรณ์กุศล",
    has_new_update: 2,
    progress: [{
        title: "สัปดาห์ที่ 1",
        date: "2025-09-01",
        student_progress: "เริ่มรวบรวมข้อมูลและวางแผนโครงงาน",
        advisor_comment: "ให้เริ่มศึกษาเครื่องมือวิเคราะห์ข้อมูลที่จำเป็น",
        progress_this_week: 10
    }, {
        title: "สัปดาห์ที่ 2",
        date: "2025-09-08",
        student_progress: "เริ่มเขียนบทที่ 1 บทนำ",
        advisor_comment: "ปรับแก้ขอบเขตโครงงานให้ชัดเจนขึ้น",
        progress_this_week: 20
    }, {
        title: "สัปดาห์ที่ 3",
        date: "2025-09-15",
        student_progress: "เริ่มรวบรวมทฤษฎีและงานวิจัยที่เกี่ยวข้อง",
        advisor_comment: "ให้เพิ่มงานวิจัยต่างประเทศที่เกี่ยวข้องกับ Machine Learning",
        progress_this_week: 30
    }, {
        title: "สัปดาห์ที่ 4",
        date: "2025-09-22",
        student_progress: "เริ่มออกแบบระบบและหน้าจอการใช้งาน",
        advisor_comment: "ออกแบบ Flowchart การทำงานให้ละเอียดขึ้น",
        progress_this_week: 40
    }]

}, {
    project_id: "PJ002",
    project_th: "แอปพลิเคชันแนะนำร้านอาหารโดยใช้ AI",
    student_name: "นางสาวกนกวรรณ ศรีประไชย",
    advisor_name: "ผศ.ดร.นิติการ นาคเจือทอง",
    has_new_update: 0,
    progress: [
        { title: "สัปดาห์ที่ 1", date: "2025-09-05", student_progress: "ส่งหัวข้อโครงงานและร่างขอบเขตเบื้องต้น", advisor_comment: "หัวข้อดี มีความน่าสนใจ", progress_this_week: 10 },
        { title: "สัปดาห์ที่ 2", date: "2025-09-12", student_progress: "เริ่มเขียนบทที่ 1 บทนำ", advisor_comment: "เนื้อหาครอบคลุมตามที่ตกลงกันไว้", progress_this_week: 20 },
        { title: "สัปดาห์ที่ 3", date: "2025-09-19", student_progress: "เริ่มรวบรวมทฤษฎีและงานวิจัยที่เกี่ยวข้อง", advisor_comment: "ให้เพิ่มงานวิจัยต่างประเทศที่เกี่ยวข้องกับ Machine Learning", progress_this_week: 30 },
        { title: "สัปดาห์ที่ 4", date: "2025-09-26", student_progress: "เริ่มออกแบบระบบและหน้าจอการใช้งาน", advisor_comment: "ออกแบบ Flowchart การทำงานให้ละเอียดขึ้น", progress_this_week: 40 },
        { title: "สัปดาห์ที่ 5", date: "2025-10-03", student_progress: "ออกแบบฐานข้อมูลเสร็จสมบูรณ์", advisor_comment: "ตรวจสอบความสัมพันธ์ของตารางให้ถูกต้อง", progress_this_week: 50 },
        { title: "สัปดาห์ที่ 6", date: "2025-10-10", student_progress: "เริ่มพัฒนาส่วน Front-end", advisor_comment: "ให้เน้น UI/UX ที่ใช้งานง่าย", progress_this_week: 60 },
        { title: "สัปดาห์ที่ 7", date: "2025-10-17", student_progress: "เริ่มพัฒนาส่วน Back-end", advisor_comment: "ตรวจสอบความปลอดภัยของ API", progress_this_week: 70 },
        { title: "สัปดาห์ที่ 8", date: "2025-10-24", student_progress: "เริ่มทดสอบระบบและแก้ไขข้อผิดพลาด", advisor_comment: "จัดทำ Test Case ให้ครอบคลุม", progress_this_week: 80 },
        { title: "สัปดาห์ที่ 9", date: "2025-10-31", student_progress: "จัดทำรายงานฉบับสมบูรณ์", advisor_comment: "ตรวจสอบการอ้างอิงและบรรณานุกรมให้ถูกต้อง", progress_this_week: 90 },
        { title: "สัปดาห์ที่ 10", date: "2025-11-07", student_progress: "จบโครงงาน", advisor_comment: "พร้อมขึ้นสอบโครงงานจบ", progress_this_week: 100 }
    ]
}, {
    project_id: "PJ003",
    project_th: "ระบบบริหารจัดการการเกษตรอัจฉริยะ",
    student_name: "นายนันทวัฒน์ นันทวิสาร",
    advisor_name: "ผศ.ดร.นิติการ นาคเจือทอง",
    has_new_update: 0,
    progress: [{
        title: "สัปดาห์ที่ 1",
        date: "2025-09-10",
        student_progress: "เริ่มทำเอกสารบทที่ 1 และ 2",
        advisor_comment: "ให้เพิ่มรายละเอียดในส่วนวัตถุประสงค์",
        progress_this_week: 25
    }, {
        title: "สัปดาห์ที่ 2",
        date: "2025-09-17",
        student_progress: "เริ่มออกแบบฐานข้อมูล",
        advisor_comment: "ปรับปรุงความสัมพันธ์ของตารางใน ER Diagram",
        progress_this_week: 50
    }, {
        title: "สัปดาห์ที่ 3",
        date: "2025-09-24",
        student_progress: "เริ่มเขียนโค้ดและพัฒนาฟังก์ชันหลัก",
        advisor_comment: "ให้เริ่มทำ Test Case สำหรับการทดสอบ",
        progress_this_week: 75
    }]
}];

const projectListContainer = document.getElementById('project-list');
const progressModal = document.getElementById('progressModal');
const modalProjectName = document.getElementById('modal-project-name');
const modalProgressFill = document.getElementById('modal-progress-fill');
const modalProgressText = document.getElementById('modal-progress-text');
const modalProjectDetails = document.getElementById('modal-project-details');

const calculateOverallProgress = (project) => {
    const latestProgress = project.progress.length > 0 ? project.progress[project.progress.length - 1].progress_this_week : 0;
    return Math.floor(latestProgress);
};

const renderProjectCards = (filteredProjects = projectData) => {
    projectListContainer.innerHTML = '';
    if (filteredProjects.length === 0) {
        projectListContainer.innerHTML = `<p class="text-center text-gray-500 text-lg col-span-full">ไม่พบโครงงานที่ตรงกับเงื่อนไข</p>`;
        return;
    }

    filteredProjects.forEach((project) => {
        const progressPercentage = calculateOverallProgress(project);
        const isCompleted = progressPercentage === 100;
        const card = document.createElement('div');
        card.className = 'project-card flex flex-col justify-between';
        const badgeHtml = project.has_new_update > 0 ? `<div class="badge">${project.has_new_update}</div>` : '';
        const progressFillClass = isCompleted ? 'completed' : '';
        const progressStatusText = isCompleted ? 'พร้อมขึ้นสอบโครงงานจบ' : `ความคืบหน้า ${progressPercentage}%`;
        const progressStatusClass = isCompleted ? 'completed' : '';

        card.innerHTML = `
                    ${badgeHtml}
                    <div>
                        <h2 class="text-xl font-bold text-gray-800 mb-2">${project.project_th}</h2>
                        <p class="text-gray-600 mb-1"><strong>นักศึกษา:</strong> ${project.student_name}</p>
                        <p class="text-gray-600 mb-4"><strong>อาจารย์ที่ปรึกษา:</strong> ${project.advisor_name}</p>
                        <div class="progress-bar">
                            <div class="progress-fill ${progressFillClass}" style="width: ${progressPercentage}%;"></div>
                        </div>
                        <p class="text-sm text-right progress-status ${progressStatusClass}">${progressStatusText}</p>
                    </div>
                    <button onclick="openProgressModal('${project.project_id}')" class="btn-progress">ดูความคืบหน้า</button>
                `;
        projectListContainer.appendChild(card);
    });
};

window.filterProjects = () => {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const filterValue = document.querySelector('input[name="progress-filter"]:checked').value;

    const filtered = projectData.filter(project => {
        const matchesSearch = project.project_th.toLowerCase().includes(searchTerm);
        const progressPercentage = calculateOverallProgress(project);
        const matchesFilter = (filterValue === 'all') || (filterValue === '100' && progressPercentage === 100);
        return matchesSearch && matchesFilter;
    });
    renderProjectCards(filtered);
};

window.openProgressModal = (projectId) => {
    const project = projectData.find(p => p.project_id === projectId);
    if (!project) return;

    const progressPercentage = calculateOverallProgress(project);

    modalProjectName.textContent = project.project_th;
    modalProgressFill.style.width = `${progressPercentage}%`;
    modalProgressFill.classList.toggle('completed', progressPercentage === 100);
    modalProgressText.textContent = `${progressPercentage}%`;

    modalProjectDetails.innerHTML = '';

    project.progress.forEach((item, index) => {
        const progressLastWeek = index > 0 ? project.progress[index - 1].progress_this_week : 0;
        const progressThisWeek = item.progress_this_week;

        const itemHtml = document.createElement('div');
        itemHtml.className = 'timeline-item';
        itemHtml.innerHTML = `
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <p class="font-bold text-gray-800 mb-2">สัปดาห์ที่ ${index + 1}: ${item.title}</p>
                        <div class="progress-week-container">
                            <span class="progress-week-label">สัปดาห์ก่อนหน้า</span>
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" style="width: ${progressLastWeek}%;"></div>
                            </div>
                            <span class="text-xs">${progressLastWeek}%</span>
                        </div>
                        <div class="progress-week-container">
                            <span class="progress-week-label">สัปดาห์ปัจจุบัน</span>
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" style="width: ${progressThisWeek}%;"></div>
                            </div>
                            <span class="text-xs">${progressThisWeek}%</span>
                        </div>
                        <p class="text-sm mt-2"><strong>ความคืบหน้าของนักศึกษา:</strong> ${item.student_progress || 'ไม่มีข้อมูล'}</p>
                        <p class="text-sm mt-1"><strong>ความคิดเห็นจากอาจารย์:</strong> ${item.advisor_comment || 'ไม่มี'}</p>
                    </div>
                `;
        modalProjectDetails.appendChild(itemHtml);
    });

    progressModal.style.display = 'flex';

    const projectIndex = projectData.findIndex(p => p.project_id === projectId);
    if (projectIndex !== -1) {
        projectData[projectIndex].has_new_update = 0;
        renderProjectCards(projectData);
    }
};

window.closeModal = (modalId) => {
    document.getElementById(modalId).style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === progressModal) {
        closeModal('progressModal');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderProjectCards();
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
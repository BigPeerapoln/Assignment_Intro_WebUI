// Data จำลอง
const weeklyProjectData = [{
    project_id: "PJ001",
    project_th: "ระบบวิเคราะห์ข้อมูลการขายสำหรับธุรกิจ SME",
    student_name: "นายศตวรรษ บัวผัน",
    advisor_name: "ผศ.นพดล บูรณ์กุศล",
    weekly_updates: [{
        week: 1,
        date: "2025-09-07",
        progress_detail: "ส่งแผนการดำเนินงานและหัวข้อโครงงานที่ปรับปรุง",
        attachment_url: "https://example.com/project_plan.pdf",
        is_reviewed: true,
        review_progress: 10,
        review_comment: "แผนงานชัดเจนดีมาก",
        review_date: "2025-09-08"
    }, {
        week: 2,
        date: "2025-09-14",
        progress_detail: "ส่งความคืบหน้าบทที่ 1",
        attachment_url: "https://example.com/chapter1.pdf",
        is_reviewed: false,
        review_progress: null,
        review_comment: null,
        review_date: null
    }, {
        week: 3,
        date: "2025-09-21",
        progress_detail: "ความคืบหน้าล่าช้าเนื่องจากอยู่ระหว่างการค้นคว้าข้อมูล",
        attachment_url: null,
        is_reviewed: false,
        review_progress: null,
        review_comment: null,
        review_date: null
    }]
}, {
    project_id: "PJ002",
    project_th: "แอปพลิเคชันแนะนำร้านอาหารโดยใช้ AI",
    student_name: "นางสาวกนกวรรณ ศรีประไชย",
    advisor_name: "อ.สุดา รักษ์ดี",
    weekly_updates: [{
        week: 1,
        date: "2025-09-05",
        progress_detail: "ส่งหัวข้อโครงงาน",
        attachment_url: "https://example.com/project_proposal.docx",
        is_reviewed: true,
        review_progress: 5,
        review_comment: "หัวข้อมีความน่าสนใจดี",
        review_date: "2025-09-06"
    }, {
        week: 2,
        date: "2025-09-12",
        progress_detail: "ส่งความคืบหน้าบทที่ 1 และ 2",
        attachment_url: "https://example.com/chapters1_2.pdf",
        is_reviewed: true,
        review_progress: 25,
        review_comment: "บทที่ 1 และ 2 เรียบร้อยดี มีการทำงานต่อเนื่องจากสัปดาห์ก่อน",
        review_date: "2025-09-13"
    }, {
        week: 3,
        date: "2025-09-19",
        progress_detail: "เริ่มการออกแบบระบบและเก็บข้อมูล",
        attachment_url: "https://example.com/system_design.pptx",
        is_reviewed: false,
        review_progress: null,
        review_comment: null,
        review_date: null
    }, {
        week: 4,
        date: "2025-09-26",
        progress_detail: "ออกแบบ UI/UX ของแอปพลิเคชัน",
        attachment_url: "https://example.com/ui_ux.zip",
        is_reviewed: false,
        review_progress: null,
        review_comment: null,
        review_date: null
    }]
}];

const weeklyProjectListContainer = document.getElementById('weekly-project-list');
const weeklyProgressModal = document.getElementById('weeklyProgressModal');
const reviewContent = document.getElementById('review-content');
const reviewedContent = document.getElementById('reviewed-content');
const modalWeeklyTitle = document.getElementById('modal-weekly-title');
const modalWeeklyDetail = document.getElementById('modal-weekly-detail');
const modalAttachmentLink = document.getElementById('modal-attachment-link');
const modalNoAttachment = document.getElementById('modal-no-attachment');
const modalPreviewBtn = document.getElementById('modal-preview-btn');
const reviewedDate = document.getElementById('reviewed-date');
const reviewedComment = document.getElementById('reviewed-comment');

const previousProgressBar = document.getElementById('previous-progress-bar');
const previousProgressText = document.getElementById('previous-progress-text');
const currentProgressBar = document.getElementById('current-progress-bar');
const currentProgressText = document.getElementById('current-progress-text');

let currentProjectId = null;
let currentWeek = null;

const getPreviousProgress = (projectId, currentWeek) => {
    const project = weeklyProjectData.find(p => p.project_id === projectId);
    if (!project) return 0;
    const previousUpdates = project.weekly_updates.filter(u => u.week < currentWeek && u.is_reviewed);
    if (previousUpdates.length > 0) {
        // Return the progress of the most recent reviewed week
        const latestPreviousUpdate = previousUpdates.sort((a, b) => b.week - a.week)[0];
        return latestPreviousUpdate.review_progress;
    }
    return 0;
};

const renderWeeklyCards = (filteredProjects = weeklyProjectData) => {
    weeklyProjectListContainer.innerHTML = '';

    const searchTerm = document.getElementById('search-box-weekly').value.toLowerCase();
    const filterWeek = document.getElementById('filter-week').value;
    const filterStatus = document.getElementById('filter-status').value;

    const projectsWithUpdates = filteredProjects.map(project => {
        const filteredUpdates = project.weekly_updates.filter(update => {
            if (filterWeek !== 'all' && update.week !== parseInt(filterWeek)) {
                return false;
            }
            if (filterStatus === 'pending' && update.is_reviewed) {
                return false;
            }
            if (filterStatus === 'reviewed' && !update.is_reviewed) {
                return false;
            }
            return true;
        });
        return { ...project, weekly_updates: filteredUpdates };
    }).filter(project => project.weekly_updates.length > 0 && (project.project_th.toLowerCase().includes(searchTerm) || project.student_name.toLowerCase().includes(searchTerm)));

    if (projectsWithUpdates.length === 0) {
        weeklyProjectListContainer.innerHTML = `<p class="text-center text-gray-500 text-lg col-span-full">ไม่พบโครงงานที่ตรงกับเงื่อนไข</p>`;
        return;
    }

    projectsWithUpdates.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card-weekly';

        const latestReviewedUpdate = project.weekly_updates.filter(u => u.is_reviewed).sort((a, b) => b.week - a.week)[0];
        const overallProgress = latestReviewedUpdate ? latestReviewedUpdate.review_progress : 0;
        const latestUpdate = project.weekly_updates.sort((a, b) => b.week - a.week)[0];

        let tableHtml = `<div class="table-container">
                                    <table class="weekly-table">
                                        <thead>
                                            <tr>
                                                <th class="rounded-tl-lg">สัปดาห์ที่</th>
                                                <th>วันที่ส่ง</th>
                                                <th>รายละเอียดความคืบหน้า</th>
                                                <th>สถานะ</th>
                                                <th class="rounded-tr-lg">ดูรายละเอียด</th>
                                            </tr>
                                        </thead>
                                        <tbody>`;

        project.weekly_updates.forEach(update => {
            const statusClass = update.is_reviewed ? 'status-reviewed' : 'status-pending';
            const statusText = update.is_reviewed ? 'ตรวจสอบแล้ว' : 'รอการตรวจ';
            const statusBadge = `<span class="status-badge ${statusClass}">${statusText}</span>`;
            const buttonClass = update.is_reviewed ? 'btn-reviewed' : 'btn-view';
            const buttonText = update.is_reviewed ? 'รายละเอียดความคืบหน้า' : 'ดูรายละเอียด';
            const detailButton = `<button class="${buttonClass}" onclick="openWeeklyModal('${project.project_id}', ${update.week})">${buttonText}</button>`;
            tableHtml += `
                        <tr>
                            <td>${update.week}</td>
                            <td>${update.date}</td>
                            <td>${update.progress_detail}</td>
                            <td>${statusBadge}</td>
                            <td>${detailButton}</td>
                        </tr>
                    `;
        });

        tableHtml += `
                                        </tbody>
                                    </table>
                                </div>`;

        card.innerHTML = `
                    <div class="mb-4">
                        <h2 class="text-2xl font-bold text-gray-800">${project.project_th}</h2>
                        <p class="text-gray-600"><strong>นักศึกษา:</strong> ${project.student_name}</p>
                        <p class="text-gray-600"><strong>อาจารย์ที่ปรึกษา:</strong> ${project.advisor_name}</p>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between items-center text-gray-700 font-semibold mb-2">
                            <span>ความคืบหน้าโดยรวม: ${overallProgress}%</span>
                            <span class="text-sm">อัปเดตล่าสุด: สัปดาห์ที่ ${latestUpdate.week} วันที่ ${latestUpdate.date}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${overallProgress}%"></div>
                        </div>
                    </div>
                    ${tableHtml}
                `;
        weeklyProjectListContainer.appendChild(card);
    });
};

window.filterWeeklyProjects = () => {
    renderWeeklyCards();
};

window.openWeeklyModal = (projectId, week) => {
    const project = weeklyProjectData.find(p => p.project_id === projectId);
    if (!project) return;

    const update = project.weekly_updates.find(u => u.week === week);
    if (!update) return;

    currentProjectId = projectId;
    currentWeek = week;

    modalWeeklyTitle.textContent = `ความคืบหน้ารายสัปดาห์ที่ ${update.week}`;

    if (update.is_reviewed) {
        // แสดงเนื้อหาสำหรับการประเมินแล้ว
        reviewContent.classList.add('hidden');
        reviewedContent.classList.remove('hidden');

        const previousProgress = getPreviousProgress(projectId, week);
        const currentProgress = update.review_progress;

        previousProgressText.textContent = previousProgress;
        previousProgressBar.style.width = `${previousProgress}%`;

        currentProgressText.textContent = currentProgress;
        currentProgressBar.style.width = `${currentProgress}%`;

        reviewedDate.textContent = update.review_date;
        reviewedComment.textContent = update.review_comment;

    } else {
        // แสดงเนื้อหาสำหรับการประเมิน
        reviewContent.classList.remove('hidden');
        reviewedContent.classList.add('hidden');

        modalWeeklyDetail.textContent = update.progress_detail;
        document.getElementById('review-comment').value = '';
        document.getElementById('review-progress').value = '';

        if (update.attachment_url) {
            modalAttachmentLink.href = update.attachment_url;
            modalAttachmentLink.classList.remove('hidden');
            modalPreviewBtn.classList.remove('hidden');
            modalNoAttachment.classList.add('hidden');
        } else {
            modalAttachmentLink.classList.add('hidden');
            modalPreviewBtn.classList.add('hidden');
            modalNoAttachment.classList.remove('hidden');
        }
    }

    weeklyProgressModal.style.display = 'flex';
};

window.previewDocument = () => {
    const project = weeklyProjectData.find(p => p.project_id === currentProjectId);
    const update = project.weekly_updates.find(u => u.week === currentWeek);
    if (update.attachment_url) {
        alert("กำลังเปิดหน้าต่างใหม่เพื่อดูตัวอย่างเอกสาร...");
        window.open(update.attachment_url, '_blank');
    }
};

window.closeModal = (modalId) => {
    document.getElementById(modalId).style.display = 'none';
};

window.onclick = (event) => {
    const modal = document.getElementById('weeklyProgressModal');
    if (event.target === modal) {
        closeModal('weeklyProgressModal');
    }
};

window.saveReview = () => {
    const comment = document.getElementById('review-comment').value;
    const progress = document.getElementById('review-progress').value;

    if (comment.trim() === "" || progress.trim() === "") {
        alert("โปรดกรอกความคิดเห็นและเปอร์เซ็นต์ความคืบหน้า");
        return;
    }

    const project = weeklyProjectData.find(p => p.project_id === currentProjectId);
    const update = project.weekly_updates.find(u => u.week === currentWeek);

    const previousProgressValue = getPreviousProgress(currentProjectId, currentWeek);
    const currentProgressValue = parseInt(progress);

    const message = `ความคืบหน้าก่อนหน้า: ${previousProgressValue}%\nความคืบหน้าปัจจุบัน: ${currentProgressValue}%\n\nบันทึกความคิดเห็นเรียบร้อยแล้ว!`;
    alert(message);

    update.is_reviewed = true;
    update.review_comment = comment;
    update.review_progress = currentProgressValue;
    update.review_date = new Date().toISOString().slice(0, 10);

    renderWeeklyCards();
    closeModal('weeklyProgressModal');
};

document.addEventListener('DOMContentLoaded', () => {
    renderWeeklyCards();
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
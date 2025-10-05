
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const projectList = document.getElementById('project-list');

    projectList.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-view-details');
        if (btn) {
            e.preventDefault();

            // Get data from data attributes
            const projectTh = btn.dataset.projectTh;
            const projectEn = btn.dataset.projectEn;
            const projectType = btn.dataset.projectType;
            const projectScope = btn.dataset.projectScope;
            const members = JSON.parse(btn.dataset.members);
            const advisor = btn.dataset.advisor;
            const coAdvisor = btn.dataset.coAdvisor;
            const status = btn.dataset.status;

            // Update modal content
            document.getElementById('project-th').textContent = projectTh;
            document.getElementById('project-en').textContent = projectEn;
            document.getElementById('project-type').textContent = projectType;
            document.getElementById('project-scope').textContent = projectScope;
            document.getElementById('project-advisor').textContent = advisor;
            document.getElementById('project-co-advisor').textContent = coAdvisor;

            const statusBadge = document.getElementById('project-status');
            statusBadge.textContent = status;

            // Remove all existing status classes before adding the new one
            statusBadge.classList.remove('status-green', 'status-amber', 'status-red');

            // Add the correct status class based on the text
            if (status.includes('ไม่ผ่าน')) {
                statusBadge.classList.add('status-red');
            } else if (status.includes('ผ่าน')) {
                if (status.includes('แก้ไข')) {
                    statusBadge.classList.add('status-amber');
                } else {
                    statusBadge.classList.add('status-green');
                }
            }

            // Populate members list
            const membersDiv = document.getElementById('project-members');
            membersDiv.innerHTML = ''; // Clear previous members
            members.forEach(member => {
                const p = document.createElement('p');
                p.innerHTML = `<strong class="text-gray-700">ชื่อ:</strong> ${member.name} (${member.id})<br><strong class="text-gray-700">สาขา:</strong> ${member.major} <strong class="text-gray-700">ชั้นปี:</strong> ${member.level} <strong class="text-gray-700">Sec:</strong> ${member.sec}`;
                membersDiv.appendChild(p);
            });

            // Show the modal
            modal.style.display = 'flex';
        }
    });

    // Close modal when clicking on the close button or outside the modal
    window.closeModal = () => {
        modal.style.display = 'none';
    }
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    }
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
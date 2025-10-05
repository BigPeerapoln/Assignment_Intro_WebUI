      // Function to show the modal by removing the 'hidden' class
            function showModal(modalId) {
        const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
        }
    }

            // Function to close the modal by adding the 'hidden' class
            function closeModal(modalId) {
        const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
        }
    }

            // Function to handle the logout confirmation
            function confirmLogout() {
                // Redirect the user to the login page
                window.location.href = '../index.html';
    }

            // *** ส่วนที่แก้ไข ***
            // 1. ระบุลิงก์ด้วย ID ที่เพิ่มเข้าไปใน HTML 
            const logoutLink = document.getElementById('logoutTrigger');

            // Add a click event listener to the logout link
            if (logoutLink) {
                logoutLink.addEventListener('click', function (event) {
                    // Prevent the default link behavior (e.g., jumping to the top of the page)
                    event.preventDefault();
                    // Show the logout confirmation modal
                    showModal('logoutAlert');
                });
    }
        // *** สิ้นสุดส่วนที่แก้ไข ***
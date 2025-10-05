
        // Default progress bar animation
        document.addEventListener('DOMContentLoaded', () => {
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            let progress = 0;

            const interval = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(interval);
                } else {
                    progress += 1;
                    progressBar.style.width = progress + '%';
                    progressText.textContent = progress + '%';
                }
            }, 10);

            // For demonstration: Set initial status to 3 (approved) to show the notification badge.
            updateStatus(3);
        });

        // Function to show the proposal form modal
        function showProposalForm() {
            closeAllContent();
            const modal = document.getElementById('proposalModal');
            modal.style.display = 'flex';
        }

        // Function to show the status page
        function showStatusPage() {
            closeAllContent();
            const statusCard = document.getElementById('statusContent');
            statusCard.classList.remove('hidden');
            statusCard.classList.add('flex');
            // For demonstration, let's assume the status is still approved.
            updateStatus(3);
        }

        // Function to show notification details card
        function showNotificationDetails() {
            closeAllContent();
            const notificationCard = document.getElementById('notificationCard');
            notificationCard.classList.remove('hidden');
            notificationCard.classList.add('flex');
            updateNotificationBadge(0); // Clear notification after it's been viewed
        }

        // Function to show default content
        function showDefaultContent() {
            closeAllContent();
            const projectDetailsCard = document.getElementById('projectDetailsContent');
            projectDetailsCard.classList.remove('hidden');
        }

        // Function to close any modal
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
        }

        // Function to submit proposal and show success alert
        function submitProposal() {
            closeModal('proposalModal');
            const alertModal = document.getElementById('submissionAlert');
            alertModal.style.display = 'flex';
        }

        // Helper function to hide all main content
        function closeAllContent() {
            const projectDetailsCard = document.getElementById('projectDetailsContent');
            const statusCard = document.getElementById('statusContent');
            const proposalModal = document.getElementById('proposalModal');
            const submissionAlert = document.getElementById('submissionAlert');
            const notificationCard = document.getElementById('notificationCard');

            projectDetailsCard.classList.add('hidden');
            statusCard.classList.add('hidden');
            proposalModal.style.display = 'none';
            submissionAlert.style.display = 'none';
            notificationCard.classList.add('hidden');
            notificationCard.classList.remove('flex');
        }

        // Function to update the status progress
        function updateStatus(status) {
            const step2Icon = document.getElementById('step2Icon');
            const step2Text = document.getElementById('step2Text');
            const step3Icon = document.getElementById('step3Icon');
            const step3Text = document.getElementById('step3Text');
            const progressLine = document.getElementById('progressLine');
            const viewDetailsBtn = document.getElementById('viewDetailsBtn');

            // Reset states first
            step2Icon.classList.remove('bg-green-500');
            step2Icon.classList.add('bg-gray-400');
            step2Text.classList.remove('text-gray-800');
            step2Text.classList.add('text-gray-600');

            step3Icon.classList.remove('bg-green-500');
            step3Icon.classList.add('bg-gray-400');
            step3Text.classList.remove('text-gray-800');
            step3Text.classList.add('text-gray-600');

            // Update based on the status
            if (status >= 2) {
                step2Icon.classList.remove('bg-gray-400');
                step2Icon.classList.add('bg-green-500');
                step2Text.classList.remove('text-gray-600');
                step2Text.classList.add('text-gray-800');
                progressLine.style.width = '50%';
            }
            if (status >= 3) {
                step3Icon.classList.remove('bg-gray-400');
                step3Icon.classList.add('bg-green-500');
                step3Text.classList.remove('text-gray-600');
                step3Text.classList.add('text-gray-800');
                progressLine.style.width = '100%';
                viewDetailsBtn.classList.remove('hidden');
                updateNotificationBadge(1); // Notify user about the new approval
            } else {
                viewDetailsBtn.classList.add('hidden');
            }
        }

        // Function to update the notification badge
        function updateNotificationBadge(count) {
            const badge = document.getElementById('notificationBadge');
            if (count > 0) {
                badge.textContent = count;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        // Close modal when clicking outside of it
        window.onclick = function (event) {
            const proposalModal = document.getElementById('proposalModal');
            const submissionAlert = document.getElementById('submissionAlert');

            if (event.target == proposalModal) {
                proposalModal.style.display = 'none';
            }
            if (event.target == submissionAlert) {
                submissionAlert.style.display = 'none';
            }
        }
    
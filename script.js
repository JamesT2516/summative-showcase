"use strict";

(function () {
    initProjectFilters();
    initContactInvitation();
    initContactForm();

    /** Filter existing HTML cards; keep keyboard focus on the selected button. */
    function initProjectFilters() {
        const controls = document.getElementById("project-filter");
        const cards = Array.from(document.querySelectorAll(".project-card[data-category]"));
        const status = document.getElementById("filter-status");
        if (!controls || !cards.length || !status) return;

        const buttons = Array.from(controls.querySelectorAll("button[data-filter]"));
        const labels = { all: "all", foundations: "HTML & CSS", javascript: "JavaScript", vue: "Vue.js" };
        controls.hidden = false;

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                const filter = button.dataset.filter;
                let visibleCount = 0;
                buttons.forEach(function (item) {
                    item.setAttribute("aria-pressed", String(item === button));
                });
                cards.forEach(function (card) {
                    card.hidden = filter !== "all" && card.dataset.category !== filter;
                    if (!card.hidden) visibleCount += 1;
                });
                status.textContent = filter === "all"
                    ? "Showing all " + visibleCount + " projects."
                    : "Showing " + visibleCount + " of " + cards.length + " projects: " + labels[filter] + ".";
            });
        });
    }

    /** Keep the original invitation without showing it on every page or stealing focus. */
    function initContactInvitation() {
        const popup = document.getElementById("contact-popup");
        const close = document.getElementById("close-popup");
        const open = document.getElementById("open-contact-popup");
        if (!popup || !close || !open) return;

        const storageKey = "jt-showcase-invitation-seen";
        let timer;
        let focusBeforeOpening = null;
        open.hidden = false;

        function markSeen() {
            // Storage can be unavailable in private browsers or when opening local files.
            try { window.sessionStorage.setItem(storageKey, "yes"); } catch (error) { /* Optional preference only. */ }
        }
        function showPopup(manual) {
            window.clearTimeout(timer);
            focusBeforeOpening = document.activeElement;
            popup.hidden = false;
            open.setAttribute("aria-expanded", "true");
            markSeen();
            if (manual) close.focus();
        }
        function hidePopup() {
            window.clearTimeout(timer);
            const focusWasInside = popup.contains(document.activeElement);
            popup.hidden = true;
            open.setAttribute("aria-expanded", "false");
            markSeen();
            if (focusWasInside) {
                const target = focusBeforeOpening && focusBeforeOpening !== document.body
                    ? focusBeforeOpening : open;
                target.focus();
            }
        }

        open.addEventListener("click", function () { showPopup(true); });
        close.addEventListener("click", hidePopup);
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !popup.hidden) hidePopup();
        });
        window.addEventListener("pagehide", hidePopup);
        window.addEventListener("pageshow", function (event) {
            if (event.persisted) popup.hidden = true;
        });

        let alreadySeen = false;
        try { alreadySeen = window.sessionStorage.getItem(storageKey) === "yes"; } catch (error) { /* Not essential. */ }
        const navigation = performance.getEntriesByType("navigation")[0];
        const returningThroughHistory = navigation && navigation.type === "back_forward";
        if (!alreadySeen && !returningThroughHistory) {
            timer = window.setTimeout(function () { showPopup(false); }, 4000);
        }
    }

    /** Validate a local demonstration only. No network request or form storage is made. */
    function initContactForm() {
        const form = document.getElementById("contact-form");
        const fields = document.getElementById("contact-fields");
        const modal = document.getElementById("confirmation-modal");
        if (!form || !fields || !modal) return;

        const name = document.getElementById("contact-name");
        const email = document.getElementById("contact-email");
        const message = document.getElementById("contact-message");
        const count = document.getElementById("message-count");
        const status = document.getElementById("form-status");
        const submit = form.querySelector(".submit-button");
        const close = document.getElementById("close-confirmation-modal");
        const done = document.getElementById("modal-done-button");
        const inputs = [name, email, message];
        const errors = new Map([
            [name, document.getElementById("name-error")],
            [email, document.getElementById("email-error")],
            [message, document.getElementById("message-error")]
        ]);
        let previouslyFocused = null;
        let previousReady = false;

        // Permit international names, spaces, apostrophes and hyphens, not just A-Z.
        const namePattern = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;
        const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

        function validationMessage(input) {
            const value = input.value.trim();
            if (input === name) {
                if (!value) return "Please enter your name.";
                if (value.length > 80) return "Please use 80 characters or fewer.";
                if (!namePattern.test(value)) return "Use letters, spaces, apostrophes or hyphens; do not include numbers.";
            } else if (input === email) {
                if (!value) return "Please enter your email address.";
                if (value.length > 254 || input.validity.typeMismatch || !emailPattern.test(value)) {
                    return "Enter an email such as name@example.com.";
                }
            } else {
                if (!value) return "Please enter a message.";
                if (value.length < 10) return "Please enter at least 10 characters.";
                if (value.length > 2000) return "Please use 2,000 characters or fewer.";
            }
            return "";
        }

        function validate(input) {
            const error = validationMessage(input);
            errors.get(input).textContent = error;
            input.classList.toggle("input-error", Boolean(error));
            input.classList.toggle("input-valid", !error);
            input.setAttribute("aria-invalid", String(Boolean(error)));
            return !error;
        }

        function updateReadiness() {
            const ready = inputs.every(function (input) { return validationMessage(input) === ""; });
            submit.classList.toggle("form-valid", ready);
            count.textContent = String(message.value.length);
            // Announce meaningful state changes, not every character the visitor types.
            if (ready !== previousReady) {
                status.textContent = ready
                    ? "All fields are valid. You can preview your message."
                    : "Complete all three fields to preview your message.";
                previousReady = ready;
            }
        }

        inputs.forEach(function (input) {
            input.addEventListener("input", function () { validate(input); updateReadiness(); });
            input.addEventListener("blur", function () { validate(input); });
        });

        form.addEventListener("submit", function (event) {
            // Prevent real submission even when validation fails.
            event.preventDefault();
            const invalidInputs = inputs.filter(function (input) { return !validate(input); });
            updateReadiness();
            if (invalidInputs.length) {
                status.textContent = "Please correct " + invalidInputs.length + " field" + (invalidInputs.length === 1 ? "" : "s") + " before previewing.";
                invalidInputs[0].focus();
                return;
            }

            // textContent renders user input as text, never as executable HTML.
            document.getElementById("submitted-name").textContent = name.value.trim();
            document.getElementById("submitted-email").textContent = email.value.trim();
            document.getElementById("submitted-message").textContent = message.value.trim();
            if (typeof modal.showModal !== "function") {
                status.textContent = "Your entries are valid. Use a current browser to view the dialog. No message has been sent.";
                return;
            }
            previouslyFocused = document.activeElement;
            modal.showModal();
            document.body.classList.add("modal-open");
            close.focus();
        });

        function closeModal() { if (modal.open) modal.close(); }
        close.addEventListener("click", closeModal);
        done.addEventListener("click", closeModal);
        // Escape uses the native dialog behaviour. Restore the invoking control on any close.
        modal.addEventListener("close", function () {
            document.body.classList.remove("modal-open");
            if (previouslyFocused && document.contains(previouslyFocused)) previouslyFocused.focus();
        });
        // Close on a true backdrop click, not on the dialog's internal padding.
        modal.addEventListener("click", function (event) {
            if (event.target !== modal) return;
            const box = modal.getBoundingClientRect();
            if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeModal();
        });

        // Only enable inputs after all safety and validation handlers have been attached.
        fields.disabled = false;
        updateReadiness();
    }
}());

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Semua field wajib diisi!");

        return;

    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({

        email,
        password

    });

    if (error) {

        alert("❌ " + error.message);

        return;

    }

    alert("✅ Login berhasil!");

    window.location.href = "dashboard.html";

});
// Ambil form
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                fullname: fullname
            }
        }
    });

    if (error) {
        alert("❌ " + error.message);
        return;
    }

    alert("✅ Registrasi berhasil! Silakan cek email untuk verifikasi.");

    window.location.href = "login.html";
});
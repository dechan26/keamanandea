let currentUser = null;

// =========================
// Cek apakah user sudah login
// =========================
async function checkUser() {

    const {
        data: { user },
        error
    } = await supabaseClient.auth.getUser();

    if (error || !user) {
        window.location.href = "login.html";
        return;
    }

    currentUser = user;

    document.getElementById("welcomeText").innerHTML =
        "Hello, " + (user.user_metadata.fullname || "Luna User") + " 🌸";

    loadDiary();
}

checkUser();


// =========================
// Logout
// =========================
document.getElementById("logoutBtn").addEventListener("click", async () => {

    await supabaseClient.auth.signOut();

    window.location.href = "login.html";

});


// =========================
// Simpan Diary
// =========================
document.getElementById("saveDiary").addEventListener("click", async () => {

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Isi semua field terlebih dahulu!");
        return;
    }

    const { error } = await supabaseClient
        .from("diaries")
        .insert([
            {
                user_id: currentUser.id,
                title: title,
                content: content
            }
        ]);

    if (error) {
        alert("❌ " + error.message);
        return;
    }

    alert("✅ Diary berhasil disimpan!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadDiary();

});


// =========================
// Menampilkan Diary
// =========================
async function loadDiary() {

    const { data, error } = await supabaseClient
        .from("diaries")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    const container = document.getElementById("diaryContainer");
    container.innerHTML = "";

    data.forEach((item) => {

        container.innerHTML += `
            <div class="diary-item">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <small>${new Date(item.created_at).toLocaleString()}</small>
            </div>
        `;

    });

}
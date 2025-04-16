export async function getUsers() {
    const response = await fetch("https://vue-fina.finanurilaulia2104.workers.dev/api/mahasiswa");
    return await response.json();
  }
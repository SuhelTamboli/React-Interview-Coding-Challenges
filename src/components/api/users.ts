interface User {
  id: string;
  firstName: string;
}

interface UsersResponse {
  users: User[];
}

let attempt = 0;
let usersPromise: Promise<UsersResponse> | null = null;

export function getUsers() {
  if (!usersPromise) {
    attempt++;

    usersPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (attempt < 3) {
          reject(new Error("API failed on attempt " + attempt));
        } else {
          resolve({
            users: [
              { id: "1", firstName: "John" },
              { id: "2", firstName: "Jane" },
            ],
          });
        }
      }, 1000);
    });
  }

  return usersPromise;
}

export function resetUsersPromise() {
  usersPromise = null;
}

let person = { role: "manager", experience: 4, active: true, department: "Marketing" };

  let message= person.role === "admin"
    ? person.active
      ? person.experience > 5
        ? person.department === "IT"
          ? "Full IT Admin Access"
          : "Full General Admin Access"
        : "Limited Admin Access"
      : "Admin Access Revoked"
    : person.role === "manager"
    ? person.active
      ? person.experience > 3
        ? person.department === "Sales"
          ? "Full Sales Manager Access"
          : "Full Manager Access"
        : "Limited Manager Access"
      : "Manager Access Revoked"
    : person.role === "user"
    ? person.active
      ? person.department === "Support"
        ? "Priority Support Access"
        : "User Access"
      : "User Access Revoked"
    : "Invalid Role";
console.log(message)

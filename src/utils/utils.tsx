export const getInitials = (user: any) => {
    if (!user) return '';
    const name = user.adminName;
    const names = name.split(' ');
    const firstLetters = names.map((word: any) => word.charAt(0));
    const initials = firstLetters.slice(0, 2).join('');
    return initials.toUpperCase();
};

export const customToastContainerStyle = {
    backgroundColor: '#333', // Background color
    color: '#fff', // Text color
    borderRadius: '8px', // Border radius
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Box shadow
    width: '300px', // Width
};

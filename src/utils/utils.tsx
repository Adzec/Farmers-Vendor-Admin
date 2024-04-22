export const getInitials = (user: any) => {
    if (!user) return '';
    const name = user.adminName;
    const names = name.split(' ');
    const firstLetters = names.map((word: any) => word.charAt(0));
    const initials = firstLetters.slice(0, 2).join('');
    return initials.toUpperCase();
};

const formatDate = (date) => {
    //   In style of 5 months ago
    const diff = Math.floor((new Date() - new Date(date)) / 1000);
    if (diff < 60) {
        return "Just now";
    }
    if (diff < 3600) {
        return Math.floor(diff / 60) + " minutes ago";
    }
    if (diff < 3600 * 24) {
        return Math.floor(diff / 3600) + " hours ago";
    }
    if (diff < 3600 * 24 * 30) {
        return Math.floor(diff / (3600 * 24)) + " days ago";
    }
    if (diff < 3600 * 24 * 30 * 12) {
        return Math.floor(diff / (3600 * 24 * 30)) + " months ago";
    }
    const return_string = Math.floor(diff / (3600 * 24 * 30 * 12)) + " years ago";
    if (return_string === "NaN years ago") {
        return "Just now";
    } else {
        return return_string;
    }
};

function localizeDateStr(date_to_convert) {
    const date = new Date(date_to_convert);
    const local_date = new Date(date + "UTC");
    return local_date.toString();
}

export { formatDate, localizeDateStr };
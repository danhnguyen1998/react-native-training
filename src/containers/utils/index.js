export const getMimeTypes = type => {
  switch (type) {
    case "txt":
      return "text/plain";
    case "pdf":
      return "text/pdf";
    case "doc":
    case "docx":
      return "application/vnd.ms-word";
    case "xls":
      return "application/vnd.ms-excel";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "gif":
      return "image/gif";
    case "csv":
      return "text/csv";
  }
};
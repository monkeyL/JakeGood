/**
 * Vietnamese translation

 * @version 16-01-2013
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
  elFinder.prototype.i18.vi = {
    translator : 'Chung Thủy f &lt;chungthuyf@gmail.com&gt;',
    language : 'Ngôn ngữ Việt Nam',
    direction : 'ltr',
    dateFormat : 'd.m.Y H:i',
    fancyDateFormat : '$1 H:i',
    messages : {

        /********************************** errors **********************************/
        'error'                : 'Lỗi',
        'errUnknown'           : 'Lỗi không xác định được.',
        'errUnknownCmd'        : 'Lỗi không rõ lệnh.',
        'errJqui'              : 'Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.',
        'errNode'              : 'elFinder requires DOM Element to be created.',
        'errURL'               : 'Cấu elFinder không hợp lệ! URL không được thiết lập tùy chọn.',
        'errAccess'            : 'Truy cập bị từ chối.',
        'errConnect'           : 'Unable to connect to backend.',
        'errAbort'             : 'Kết nối bị hủy bỏ.',
        'errTimeout'           : 'Connection timeout.',
        'errNotFound'          : 'Backend not found.',
        'errResponse'          : 'Invalid backend response.',
        'errConf'              : 'Invalid backend configuration.',
        'errJSON'              : 'PHP JSON module not installed.',
        'errNoVolumes'         : 'Readable volumes not available.',
        'errCmdParams'         : 'Invalid parameters for command "$1".',
        'errDataNotJSON'       : 'Data is not JSON.',
        'errDataEmpty'         : 'Data is empty.',
        'errCmdReq'            : 'Backend request requires command name.',
        'errOpen'              : 'Unable to open "$1".',
        'errNotFolder'         : 'Object is not a folder.',
        'errNotFile'           : 'Object is not a file.',
        'errRead'              : 'Unable to read "$1".',
        'errWrite'             : 'Unable to write into "$1".',
        'errPerm'              : 'Permission denied.',
        'errLocked'            : '"$1" is locked and can not be renamed, moved or removed.',
        'errExists'            : 'File named "$1" already exists.',
        'errInvName'           : 'Invalid file name.',
        'errFolderNotFound'    : 'Folder not found.',
        'errFileNotFound'      : 'File not found.',
        'errTrgFolderNotFound' : 'Target folder "$1" not found.',
        'errPopup'             : 'Browser prevented opening popup window. To open file enable it in browser options.',
        'errMkdir'             : 'Unable to create folder "$1".',
        'errMkfile'            : 'Unable to create file "$1".',
        'errRename'            : 'Unable to rename "$1".',
        'errCopyFrom'          : 'Copying files from volume "$1" not allowed.',
        'errCopyTo'            : 'Copying files to volume "$1" not allowed.',
        'errUploadCommon'      : 'Upload error.',
        'errUpload'            : 'Unable to upload "$1".',
        'errUploadNoFiles'     : 'No files found for upload.',
        'errMaxSize'           : 'Data exceeds the maximum allowed size.',
        'errFileMaxSize'       : 'File exceeds maximum allowed size.',
        'errUploadMime'        : 'File type not allowed.',
        'errUploadTransfer'    : '"$1" transfer error.', 
        'errSave'              : 'Unable to save "$1".',
        'errCopy'              : 'Unable to copy "$1".',
        'errMove'              : 'Unable to move "$1".',
        'errCopyInItself'      : 'Unable to copy "$1" into itself.',
        'errRm'                : 'Unable to remove "$1".',
        'errExtract'           : 'Unable to extract files from "$1".',
        'errArchive'           : 'Unable to create archive.',
        'errArcType'           : 'Unsupported archive type.',
        'errNoArchive'         : 'File is not archive or has unsupported archive type.',
        'errCmdNoSupport'      : 'Backend does not support this command.',
        'errReplByChild'       : 'The folder “$1” can’t be replaced by an item it contains.',
        'errArcSymlinks'       : 'For security reason denied to unpack archives contains symlinks.',
        'errArcMaxSize'        : 'Archive files exceeds maximum allowed size.',
        'errResize'            : 'Unable to resize "$1".',
        'errUsupportType'      : 'Unsupported file type.',

        /******************************* commands names ********************************/
        'cmdarchive'   : 'Tạo tập tin nén',
        'cmdback'      : 'Trở lại',
        'cmdcopy'      : 'Sao chép',
        'cmdcut'       : 'Cắt',
        'cmddownload'  : 'Tải về',
        'cmdduplicate' : 'Bản sao',
        'cmdedit'      : 'Sửa tập tin',
        'cmdextract'   : 'Giải nén tập tin',
        'cmdforward'   : 'Trước',
        'cmdgetfile'   : 'Chọn tập tin',
        'cmdhelp'      : 'Giới thiệu phần mềm',
        'cmdhome'      : 'Home',
        'cmdinfo'      : 'Thông tin',
        'cmdmkdir'     : 'Thư mục',
        'cmdmkfile'    : 'Tạo tập tin Text',
        'cmdopen'      : 'Mở',
        'cmdpaste'     : 'Paste',
        'cmdquicklook' : 'Xem trước',
        'cmdreload'    : 'Nạp lại',
        'cmdrename'    : 'Đổi tên',
        'cmdrm'        : 'Xóa',
        'cmdsearch'    : 'Tìm tập tin',
        'cmdup'        : 'Go to parent directory',
        'cmdupload'    : 'Tải tập tin lên',
        'cmdview'      : 'Xem',
        'cmdresize'    : 'Resize image',
        'cmdsort'      : 'Sắp xếp',

        /*********************************** buttons ***********************************/ 
        'btnClose'  : 'Đóng',
        'btnSave'   : 'Lưu',
        'btnRm'     : 'Gỡ bỏ',
        'btnApply'  : 'Áp dụng',
        'btnCancel' : 'Hủy bỏ',
        'btnNo'     : 'Không',
        'btnYes'    : 'Đồng ý',

        /******************************** notifications ********************************/
        'ntfopen'     : 'Mở thư mục',
        'ntffile'     : 'Mở tập tin',
        'ntfreload'   : 'Nạp lại nội dung thư mục',
        'ntfmkdir'    : 'Tạo thư mục',
        'ntfmkfile'   : 'Tạo tập tin',
        'ntfrm'       : 'Xóa tập tin',
        'ntfcopy'     : 'Sao chép tập tin',
        'ntfmove'     : 'Di chuyển tập tin',
        'ntfprepare'  : 'Chuẩn bị để sao chép các tập tin',
        'ntfrename'   : 'Đổi tên tập tin',
        'ntfupload'   : 'Tải tập tin lên',
        'ntfdownload' : 'Tải tập tin',
        'ntfsave'     : 'Lưu tập tin',
        'ntfarchive'  : 'Tạo tập tin nén',
        'ntfextract'  : 'Giải nén tập tin',
        'ntfsearch'   : 'Tìm kiếm tập tin',
        'ntfsmth'     : 'Doing something >_<',
        'ntfloadimg'  : 'Đang tải hình ảnh',

        /************************************ dates **********************************/
        'dateUnknown' : 'Chưa biết',
        'Today'       : 'Hôm nay',
        'Yesterday'   : 'Yesterday',
        'Jan'         : 'Jan',
        'Feb'         : 'Feb',
        'Mar'         : 'Mar',
        'Apr'         : 'Apr',
        'May'         : 'May',
        'Jun'         : 'Jun',
        'Jul'         : 'Jul',
        'Aug'         : 'Aug',
        'Sep'         : 'Sep',
        'Oct'         : 'Oct',
        'Nov'         : 'Nov',
        'Dec'         : 'Dec',
        'January'     : 'January',
        'February'    : 'February',
        'March'       : 'March',
        'April'       : 'April',
        'May'         : 'May',
        'June'        : 'June',
        'July'        : 'July',
        'August'      : 'August',
        'September'   : 'September',
        'October'     : 'October',
        'November'    : 'November',
        'December'    : 'December',
        'Sunday'      : 'Sunday', 
        'Monday'      : 'Monday', 
        'Tuesday'     : 'Tuesday', 
        'Wednesday'   : 'Wednesday', 
        'Thursday'    : 'Thursday', 
        'Friday'      : 'Friday', 
        'Saturday'    : 'Saturday',
        'Sun'         : 'Sun', 
        'Mon'         : 'Mon', 
        'Tue'         : 'Tue', 
        'Wed'         : 'Wed', 
        'Thu'         : 'Thu', 
        'Fri'         : 'Fri', 
        'Sat'         : 'Sat',
        /******************************** sort variants ********************************/
        'sortnameDirsFirst' : 'by name (folders first)', 
        'sortkindDirsFirst' : 'by kind (folders first)', 
        'sortsizeDirsFirst' : 'by size (folders first)', 
        'sortdateDirsFirst' : 'by date (folders first)', 
        'sortname'          : 'by name', 
        'sortkind'          : 'by kind', 
        'sortsize'          : 'by size',
        'sortdate'          : 'by date',

        /********************************** messages **********************************/
        'confirmReq'      : 'Confirmation required',
        'confirmRm'       : 'Are you sure you want to remove files?<br/>This cannot be undone!',
        'confirmRepl'     : 'Replace old file with new one?',
        'apllyAll'        : 'Apply to all',
        'name'            : 'Name',
        'size'            : 'Size',
        'perms'           : 'Permissions',
        'modify'          : 'Modified',
        'kind'            : 'Kind',
        'read'            : 'read',
        'write'           : 'write',
        'noaccess'        : 'no access',
        'and'             : 'and',
        'unknown'         : 'unknown',
        'selectall'       : 'Select all files',
        'selectfiles'     : 'Select file(s)',
        'selectffile'     : 'Select first file',
        'selectlfile'     : 'Select last file',
        'viewlist'        : 'List view',
        'viewicons'       : 'Icons view',
        'places'          : 'Places',
        'calc'            : 'Calculate', 
        'path'            : 'Path',
        'aliasfor'        : 'Alias for',
        'locked'          : 'Locked',
        'dim'             : 'Dimensions',
        'files'           : 'Files',
        'folders'         : 'Folders',
        'items'           : 'Items',
        'yes'             : 'yes',
        'no'              : 'no',
        'link'            : 'Link',
        'searcresult'     : 'Search results',  
        'selected'        : 'selected items',
        'about'           : 'About',
        'shortcuts'       : 'Shortcuts',
        'help'            : 'Help',
        'webfm'           : 'Web file manager',
        'ver'             : 'Version',
        'protocol'        : 'protocol version',
        'homepage'        : 'Project home',
        'docs'            : 'Documentation',
        'github'          : 'Fork us on Github',
        'twitter'         : 'Follow us on twitter',
        'facebook'        : 'Join us on facebook',
        'team'            : 'Team',
        'chiefdev'        : 'chief developer',
        'developer'       : 'developer',
        'contributor'     : 'contributor',
        'maintainer'      : 'maintainer',
        'translator'      : 'translator',
        'icons'           : 'Icons',
        'dontforget'      : 'and don\'t forget to take your towel',
        'shortcutsof'     : 'Shortcuts disabled',
        'dropFiles'       : 'Drop files here',
        'or'              : 'or',
        'selectForUpload' : 'Select files to upload',
        'moveFiles'       : 'Move files',
        'copyFiles'       : 'Copy files',
        'rmFromPlaces'    : 'Remove from places',
        'untitled folder' : 'untitled folder',
        'untitled file.txt' : 'untitled file.txt',
        'aspectRatio'     : 'Aspect ratio',
        'scale'           : 'Scale',
        'width'           : 'Width',
        'height'          : 'Height',
        'mode'            : 'Mode',
        'resize'          : 'Resize',
        'crop'            : 'Crop',
        'rotate'          : 'Rotate',
        'rotate-cw'       : 'Rotate 90 degrees CW',
        'rotate-ccw'      : 'Rotate 90 degrees CCW',
        'degree'          : 'Degree',

        /********************************** mimetypes **********************************/
        'kindUnknown'     : 'Unknown',
        'kindFolder'      : 'Folder',
        'kindAlias'       : 'Alias',
        'kindAliasBroken' : 'Broken alias',
        // applications
        'kindApp'         : 'Application',
        'kindPostscript'  : 'Postscript document',
        'kindMsOffice'    : 'Microsoft Office document',
        'kindMsWord'      : 'Microsoft Word document',
        'kindMsExcel'     : 'Microsoft Excel document',
        'kindMsPP'        : 'Microsoft Powerpoint presentation',
        'kindOO'          : 'Open Office document',
        'kindAppFlash'    : 'Flash application',
        'kindPDF'         : 'Portable Document Format (PDF)',
        'kindTorrent'     : 'Bittorrent file',
        'kind7z'          : '7z archive',
        'kindTAR'         : 'TAR archive',
        'kindGZIP'        : 'GZIP archive',
        'kindBZIP'        : 'BZIP archive',
        'kindZIP'         : 'ZIP archive',
        'kindRAR'         : 'RAR archive',
        'kindJAR'         : 'Java JAR file',
        'kindTTF'         : 'True Type font',
        'kindOTF'         : 'Open Type font',
        'kindRPM'         : 'RPM package',
        // texts
        'kindText'        : 'Text document',
        'kindTextPlain'   : 'Plain text',
        'kindPHP'         : 'PHP source',
        'kindCSS'         : 'Cascading style sheet',
        'kindHTML'        : 'HTML document',
        'kindJS'          : 'Javascript source',
        'kindRTF'         : 'Rich Text Format',
        'kindC'           : 'C source',
        'kindCHeader'     : 'C header source',
        'kindCPP'         : 'C++ source',
        'kindCPPHeader'   : 'C++ header source',
        'kindShell'       : 'Unix shell script',
        'kindPython'      : 'Python source',
        'kindJava'        : 'Java source',
        'kindRuby'        : 'Ruby source',
        'kindPerl'        : 'Perl script',
        'kindSQL'         : 'SQL source',
        'kindXML'         : 'XML document',
        'kindAWK'         : 'AWK source',
        'kindCSV'         : 'Comma separated values',
        'kindDOCBOOK'     : 'Docbook XML document',
        // images
        'kindImage'       : 'Image',
        'kindBMP'         : 'BMP image',
        'kindJPEG'        : 'JPEG image',
        'kindGIF'         : 'GIF Image',
        'kindPNG'         : 'PNG Image',
        'kindTIFF'        : 'TIFF image',
        'kindTGA'         : 'TGA image',
        'kindPSD'         : 'Adobe Photoshop image',
        'kindXBITMAP'     : 'X bitmap image',
        'kindPXM'         : 'Pixelmator image',
        // media
        'kindAudio'       : 'Audio media',
        'kindAudioMPEG'   : 'MPEG audio',
        'kindAudioMPEG4'  : 'MPEG-4 audio',
        'kindAudioMIDI'   : 'MIDI audio',
        'kindAudioOGG'    : 'Ogg Vorbis audio',
        'kindAudioWAV'    : 'WAV audio',
        'AudioPlaylist'   : 'MP3 playlist',
        'kindVideo'       : 'Video media',
        'kindVideoDV'     : 'DV movie',
        'kindVideoMPEG'   : 'MPEG movie',
        'kindVideoMPEG4'  : 'MPEG-4 movie',
        'kindVideoAVI'    : 'AVI movie',
        'kindVideoMOV'    : 'Quick Time movie',
        'kindVideoWM'     : 'Windows Media movie',
        'kindVideoFlash'  : 'Flash movie',
        'kindVideoMKV'    : 'Matroska movie',
        'kindVideoOGG'    : 'Ogg movie'
    }
  }
}

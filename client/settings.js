
var React = require('react')
var Link = require('react-router').Link
var SettingsCheckbox = require('./settings-checkbox')
var SettingsTextbox = require('./settings-textbox')

var divStyle = {
  whiteSpace: 'nowrap'
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    var LineNumbers = SettingsCheckbox({
      name: 'lineNumbers',
      enableOptions: { editor: { lineNumbers: true } },
      disableOptions: { editor: { lineNumbers: false } },
      label: 'Enable line numbering.'
    });

    var SpellCheck = SettingsCheckbox({
      name: 'spellcheck',
      enableOptions: { editor: { inputStyle: 'contenteditable', spellcheck: true } },
      disableOptions: { editor: { inputStyle: null, spellcheck: false } },
      label: 'Enable spellchecking. (buggy on older browsers)'
    });

    var AskImageFilename = SettingsCheckbox({
      name: 'askImageFilename',
      label: 'Always ask for filename.',
      style: { width: '300px', display: 'inline-block' }
    });

    var OverwriteImages = SettingsCheckbox({
      name: 'overwriteImages',
      label: 'Overwrite images if file already exists.',
      style: { width: '425px', display: 'inline-block' }
    })

    var ImageRootPath = SettingsTextbox({
      name: 'imageRootPath',
      defaultValue: '/uploads',
      label: 'Image Root directory'
    });

    var ImagePrefix = SettingsTextbox({
      name: 'imagePrefix',
      defaultValue: 'pasted-',
      label: 'Image filename prefix'
    });
    var ImagePathFolderFormat = SettingsTextbox({
      name: 'imagePathFolderFormat',
      defaultValue: 'YYYY/MM',
      label: 'Image PathFolder Format'
    });
    return (
      <div className="settings" style={divStyle}>
        <h1>Settings</h1>
        <p>
          Set various settings for your admin panel and editor.
        </p>
        <p>
          Hexo admin can be secured with a password.
          {' '}<Link to='auth-setup'>Setup authentification here.</Link>
        </p>
        <hr />

        <h2>Editor Settings</h2>
        {LineNumbers}
        {SpellCheck}
        <hr />

        <h2>Image Pasting Settings</h2>
        <p>
          Hexo-admin allows you to paste images you copy from the web or elsewhere directly
          into the editor. Decide how you'd like to handle the pasted images.
        </p>
        {AskImageFilename}
        {OverwriteImages}
        {ImageRootPath}
        {ImagePathFolderFormat}
        {ImagePrefix}
      </div>
    );
  }
}

module.exports = Settings

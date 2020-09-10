//import axios from 'axios'; 

import React,{Component} from 'react'; 

import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

export default class App extends Component { 


  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
        open: false,
        files: []
    };
}
	 
//	onFileChange = event => { 
	
	//this.setState({ selectedFile: event.target.files[0] }); 
	
	//}; 
	

	//onFileUpload = () => { 

	//const formData = new FormData(); 
	

	//formData.append( 
		//"myFile", 
	//	this.state.selectedFile, 
	//	this.state.selectedFile.name 
	//); 
	
	//console.log(this.state.selectedFile); 
	
	// Request made to the backend api 
	// Send formData object 
	//axios.post("api/uploadfile", formData); 
  //}; 
  handleClose() {
        this.setState({
            open: false
        });
        
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
            
        });
        console.log(files);
    }
    
	
    handleOpen() {
      this.setState({
          open: true,
      });
  }
	
  render() {
    return (
        <div>
            <Button onClick={this.handleOpen.bind(this)}>
              Add Image
            </Button>
            <DropzoneDialog
                open={this.state.open}
                onSave={this.handleSave.bind(this)}
                
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={this.handleClose.bind(this)}
            />
        </div>
    );
}
}

import * as React from 'react';
import {observer, inject} from "mobx-react";

class Sample extends React.Component<void, void>{
  render(){
    return (
      <div>Sample Component Rendered</div>
    );
  }
}

export default Sample;
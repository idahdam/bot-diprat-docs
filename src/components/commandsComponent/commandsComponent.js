import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import './styles.css';
import { CommandSideBar } from './commands.elements'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const commandsComponent = ({title, basic, random, math, fml}) => {
    return(
       <>
          <Tabs>
            <TabList>            
              {title.map((data, index) => {    
                    return(
                        <>
                        <Tab key={index}>
                            <h4>{data.title}</h4>
                        </Tab>
                        </>
                    )
                })}
            </TabList>

            <TabPanel>
            {basic.map((data, index) => {    
                    return(
                        <>
                        
                          <div key={index} className="panel-content">
                            <h3>{data.command}</h3>
                            <p>{data.expl}</p>
                          </div>
                        
                        </>
                    )
                })}
            </TabPanel>

            <TabPanel>
            {math.map((data, index) => {    
                    return(
                        <>
                        
                          <div key={index} className="panel-content">
                            <h3>{data.command}</h3>
                            <p>{data.expl}</p>
                          </div>
                        
                        </>
                    )
                })}
              </TabPanel>
              <TabPanel>
                {random.map((data, index) => {    
                        return(
                            <>
                            
                              <div key={index} className="panel-content">
                                <h3>{data.command}</h3>
                                <p>{data.expl}</p>
                              </div>
                            
                            </>
                        )
                    })}
              </TabPanel>
              <TabPanel>
                {fml.map((data, index) => {    
                        return(
                            <>
                            
                              <div key={index} className="panel-content">
                                <h3>{data.command}</h3>
                                <p>{data.expl}</p>
                              </div>
                            
                            </>
                        )
                    })}
              </TabPanel>
          </Tabs>
          <br/><br/><br/><br/><br/>
       </>
    )
};

export default commandsComponent;
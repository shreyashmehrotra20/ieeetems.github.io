import React from 'react';
import BoardItem from './BoardItem';
import {Grid} from '@material-ui/core';
import {boardList} from '../static/boardDetails';
import venugopal from '../static/venugopal.jpg';
import subashini from '../static/subashini.jpg';

export default function Board() {
    const BoardRows = function() {
        let rows = [], boardCount = boardList.length;
        for(let i=0; i<boardCount; i++) 
            rows.push(
                <Grid 
                    item 
                    xs={12} sm={2}
                    key = {i}
                >
                    <BoardItem 
                        designation = {boardList[i].designation}
                        name = {boardList[i].name}
                        imageSrc = {boardList[i].imageSrc}
                        linkedInProfile = {boardList[i].linkedInProfile}
                    />
                </Grid>
            );
        return rows;
    }();
    return (
        <Grid 
            container
            justify = "center"
            className = "boardContainer"
            id = "board"
        >
            <Grid item xs={1}/>
            <Grid container item xs={12} justify="space-evenly" alignItems="center">
                <Grid item xs={12} className = "head">
                    <h1>TEAM</h1>
                    <p  className = "subhead">Board - 2023</p>
                </Grid>
                <Grid container item xs={12} className="boardRow">
                <Grid item xs={12} sm={1}/>
                    {BoardRows.slice(0,5)}
                    
                </Grid>
                <Grid container item xs={12} className="boardRow">
                <Grid item xs={12} sm={1}/>
                    {BoardRows.slice(5,10)}
                </Grid>
                
                
                


                <Grid container item xs={12} className = "facultyRow">
                    <Grid item xs={12} sm={4}/>
                    <Grid 
                        item 
                        xs={12} sm={2}
                    >
                        <BoardItem 
                            designation = "Faculty Coordinator"
                            name = "Dr. Venugopal P"
                            imageSrc = {venugopal}
                            linkedInProfile = "https://www.linkedin.com/in/dr-pulidindi-venugopal-65230337/"
                        />
                    </Grid>
                    <Grid 
                        item 
                        xs={12} sm={2}
                    >
                        <BoardItem 
                            designation = "Faculty Coordinator"
                            name = "Subashini R"
                            imageSrc = {subashini}
                            linkedInProfile = "https://www.linkedin.com/in/subashini-rajagopal-b97319139/"
                        />
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    );
}
import React, { Component } from 'react'

const url= "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.scoopwhoop.com%2Frss";

export async function getFeeds() {
    let result= await fetch(url).then(res=> res.json());
    return result.items
}
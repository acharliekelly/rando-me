# rando-me

A personal website with randomly generated design

## Description

This website consists of static text and a randomized stylesheet. It is based on a project prompt from [DevProjects](https://www.codementor.io/projects/web/personal-website-with-randomly-generated-design-atx32ht3j3), as imagined and implemented by [Charlie Kelly](https://acharliekelly.github.io).

## Structure

The idea is to host a static site (HTML + CSS) in an AWS S3 bucket, but have the CSS values randomized via Lambda functions, according to a schedule kept by CloudWatch.

So far, I've only got as far as the static site, on account of AWS is obnoxiously hard.

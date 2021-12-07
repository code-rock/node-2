import {of, from, timer, range} from 'rxjs';
import { ajax } from 'rxjs/ajax';

const githubRepository = `https://api.github.com/search/repositories?q=${'ndtnf-homeworks'}`;

const repo = ajax.getJSON(githubRepository);

repo.subscribe(
  res => console.log(res, 'git hub'),
  err => console.error(err, 'git hub')
);

const gitLab = `https://gitlab.com/api/v4/projects?search=${'tezos'}`;
const project = ajax(gitLab);

project.subscribe(
  res => console.log(res, 'gitlab project'),
  err => console.error(err, 'gitlab project')
);
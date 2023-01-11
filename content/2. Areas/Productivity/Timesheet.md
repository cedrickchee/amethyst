### Week view

^a7db2c

%% The dates are setup for previous Monday to last Friday range, when we're Monday %%
```dataview
task from "1. 📚 Projects/📅 Planning"
where file.day >= date(today) - dur(7 days) and file.day < date(today) - dur(2 days)
sort file.day asc
```

If your user is called `user` and your host is called you could add these lines to `/etc/sudoers`:

```
user = (root) NOPASSWD: /sbin/shutdown
user = (root) NOPASSWD: /sbin/reboot
```

This will allow the user `user` to run the desired commands without entering a password. All other sudoed commands will still require a password.

The commands specified in the `sudoers` file _must_ be fully qualified (i.e. using the absolute path to the command to run)

If the command ends with a trailing `/` character and points to a directory, the user will be able to run any command in that directory (but not in any sub-directories therein). In the following example, the user `user` can run any command in the directory `/home/someuser/bin/`:

```
user = (root) NOPASSWD: /home/someuser/bin/
```

As an alternative to editing the `/etc/sudoers` file, you could add the two lines to a new file in `/etc/sudoers.d` e.g. `/etc/sudoers.d/shutdown`. This is an elegant way of separating different changes to the `sudo` rights and also leaves the original `sudoers` file untouched for easier upgrades.

*visudo can be used to edit those files too, this prevent error that could lock you out of the system*
```
sudo visudo -f /etc/sudoers.d/shutdown 
```

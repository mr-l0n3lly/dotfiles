#!/usr/bin/env zx



const monitors = await $`xrandr | grep ' connected ' | wc -l`;

if (Number(monitors) === 1) {
  await $`xrandr --output eDP-1 --primary --mode 1920x1080 --pos 0x0 --rotate normal --output HDMI-1 --off --output DP-1 --off --output HDMI-2 --off --output DP-2 --off --output HDMI-3 --off`;
} else if (Number(monitors) === 2) {
  await $`xrandr --output eDP-1 --primary --mode 1920x1080 --pos 0x1080 --rotate normal --output HDMI-1 --off --output DP-1 --mode 1920x1080 --pos 0x0 --rotate normal --output HDMI-2 --off --output DP-2 --off --output HDMI-3 --off`;
} else if (Number(monitors) === 3) {
  await $`xrandr --output eDP-1 --primary --mode 1920x1080 --pos 1677x1440 --rotate normal --output HDMI-1 --mode 2560x1440 --pos 2560x0 --rotate normal --output DP-1 --mode 2560x1440 --pos 0x0 --rotate normal --output HDMI-2 --off --output DP-2 --off --output HDMI-3 --off`;
}

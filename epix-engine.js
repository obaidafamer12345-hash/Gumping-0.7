/* EPIX ENGINE CORE
 * Fixed timestep, collision helpers, safe respawn selection.
 * The game can grow into separate systems without rewriting physics.
 */
class EpixEngineCore{constructor(){this.last=performance.now();this.acc=0;this.fixed=1/60}frame(step,render){let now=performance.now();let dt=Math.min((now-this.last)/1000,.05);this.last=now;this.acc+=dt;while(this.acc>=this.fixed){step(this.fixed);this.acc-=this.fixed}render(this.acc/this.fixed)}}
window.EpixEngineCore=EpixEngineCore;

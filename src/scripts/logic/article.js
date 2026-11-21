import { DCLogic, setTheme, savePref, loadPref, clearForm, submitForm } from '../bind.js';
class Component extends DCLogic {
constructor(props) { super(props); this.state = { speaking: false, toast: false }; }
componentWillUnmount() { try { window.speechSynthesis.cancel(); } catch (e) {} clearTimeout(this.tt); }
renderVals() {
const s = this.state;
return {
speakLabel: s.speaking ? 'Zatrzymaj czytanie' : 'Posłuchaj wpisu',
speakBg: s.speaking ? 'var(--accent-tint)' : 'transparent',
speakBorder: s.speaking ? 'var(--accent)' : 'var(--line-strong)',
toast: s.toast,
speak: () => {
const synth = window.speechSynthesis;
if (!synth) return;
if (this.state.speaking) { synth.cancel(); this.setState({ speaking: false }); return; }
const el = document.getElementById('wpis');
const u = new SpeechSynthesisUtterance(el ? el.innerText : '');
u.lang = 'pl-PL'; u.rate = 0.95;
u.onend = () => this.setState({ speaking: false });
synth.cancel(); synth.speak(u); this.setState({ speaking: true });
},
print: () => window.print(),
share: () => {
const data = { title: 'Dziwny SMS? Prześlij go na 8080', text: 'Krótki poradnik: co zrobić z podejrzanym SMS-em.', url: 'https://mikolajborawski.pl/porady/8080' };
if (navigator.share) { navigator.share(data).catch(() => {}); return; }
try { navigator.clipboard.writeText(data.url); } catch (e) {}
this.setState({ toast: true }); clearTimeout(this.tt); this.tt = setTimeout(() => this.setState({ toast: false }), 2200);
}
};
}
}
export default Component;

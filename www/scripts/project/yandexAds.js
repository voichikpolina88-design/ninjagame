
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

// 1. ФУНКЦИЯ ДЛЯ ОБЫЧНОЙ РЕКЛАМЫ
window.showFullAd = function() {
    const adUnitId = "R-M-19233069-1"; // ВСТАВЬ СВОЙ ID МЕЖСТРАНИЧКИ

    if (window.YandexMobileAds) {
        window.YandexMobileAds.showInterstitial(adUnitId, () => {
            // Когда реклама закрыта, меняем хэш на "closed"
            window.location.hash = "closed";
        });
    } else {
        // Если SDK нет (в браузере), просто имитируем закрытие
        window.location.hash = "closed";
    }
};

// 2. ФУНКЦИЯ ДЛЯ РЕКЛАМЫ ЗА ЖИЗНЬ
window.showRewardAd = function() {
    const adUnitId = "R-M-19233069-2"; // ВСТАВЬ СВОЙ ID ВОЗНАГРАЖДЕНИЯ

    if (window.YandexMobileAds) {
        window.YandexMobileAds.showRewarded(adUnitId, (reward) => {
            // Когда награда получена, меняем хэш на "reward"
            window.location.hash = "reward";
        });
    } else {
        // Тестовая выдача награды для проверки
        window.location.hash = "reward";
    }
};
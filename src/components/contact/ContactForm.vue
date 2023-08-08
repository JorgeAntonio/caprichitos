<script lang="ts" setup>
import ContactCard from "@/components/contact/ContactCard.vue";
</script>

<template>
    <MainSection>
        <div id="contactar" class="card border py-16 bg-primary">
            <div class="card-body flex md:flex-row justify-center items-center gap-6">
                <div class="hidden md:flex flex-col justify-center w-[60%]">
                    <h1 class="text-4xl font-semibold mb-6">¡Llamanos, escribenos!</h1>
                    <div class="flex flex-row mb-6 justify-start items-center gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1536 1600">
                            <path fill="currentColor"
                                d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z" />
                        </svg>
                        <h1 class="text-4xl font-semibold"> +51 939-522-596</h1>
                    </div>
                    <h1 class="text-4xl font-semibold mb-6">¡Nos encantaría escucharte!</h1>
                    <p class="text-xl font-semibold leading-snug">En Caprichos, valoramos cada opinión y estamos aquí para
                        responder a todas tus preguntas. <br><br> Si deseas
                        realizar un pedido personalizado, conocer más sobre nuestros deliciosos productos o simplemente
                        compartir tus comentarios, ¡no dudes en ponerte en contacto con nosotros a través de este
                        formulario! <br><br> Tu satisfacción es nuestra máxima prioridad, y estamos emocionados de ser parte
                        de los
                        momentos dulces en tu vida. Completa el formulario y te responderemos en breve. <br><br>¡Gracias por
                        elegir
                        Caprichos para endulzar tus
                        días!
                    </p>
                </div>
                <div class="flex flex-col justify-center items-center gap-4 w-[40%]">
                    <ContactCard />
                </div>

            </div>
        </div>
    </MainSection>
</template>

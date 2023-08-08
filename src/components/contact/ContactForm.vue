<script lang="ts" setup>
import ContactCard from "@/components/contact/ContactCard.vue";
</script>

<template>
    <MainSection>
        <div id="contactar" class="card border py-16 bg-primary">
            <div class="card-body flex md:flex-row justify-center items-center gap-6">
                <div class="hidden md:flex flex-col justify-center w-[60%]">
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

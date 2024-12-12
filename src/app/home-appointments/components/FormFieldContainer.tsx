import { FormLabel, FormItem, FormControl } from '@/components/ui/form';

type FormFieldContainerProps = {
  label: string;
  fieldId: string;
  children: React.ReactNode;
};
export const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  fieldId,
  children,
}) => (
  <div className='space-y-3 w-full mb-6'>
    <FormLabel className='px-2 font-bold'>{label}</FormLabel>
    <FormItem id={fieldId} className='scroll-mt-32'>
      <FormControl>{children}</FormControl>
    </FormItem>
  </div>
);
